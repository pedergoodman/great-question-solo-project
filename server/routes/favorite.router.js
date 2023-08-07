const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

// TODO - add auth to all routes

// GET - grabbing logged in user's favorite questions 
router.get('/', rejectUnauthenticated, (req, res) => {
  const userId = req?.user?.id;

  

  const sqlText = `
    SELECT
      json_build_object(
        'categoryId', categories.id, 
        'categoryName', category_name
      ) AS "categoryData",
      json_agg(
        json_build_object(
          'questionId', questions.id, 
          'questionText', question, 
          'userAddedId', questions.user_added_id,
          'isFavorited', user_favorited.user_id
        )
      ) AS "questionData"
    FROM "categories" 
    JOIN "question_categories" 
      ON "categories".id = "question_categories"."category_id" 
    JOIN "questions"
      ON "question_categories"."question_id" = "questions"."id"
    JOIN "user_favorited"
      ON "user_favorited"."question_id" = "questions"."id"	      
    WHERE 
      "user_favorited"."user_id" = $1
    GROUP BY categories.id
  ;`

  pool.query(sqlText, [userId])
    .then((result) => {
      // console.log(result.rows);
      res.send(result.rows)
    }).catch((err) => {
      console.log('error ADDING favorite to database', err);
      res.sendStatus(500)
    });

});

// POST - link user & question data
router.post('/', rejectUnauthenticated, async (req, res) => {
  // user id and question id to post
  const questionId = req.body.questionID
  const userId = req?.user?.id;

  const ifFavExists = `
    SELECT * 
    FROM
      "user_favorited"
    WHERE
      question_id = $1 AND user_id = $2
  ;`

  const insertFav = `
    INSERT INTO
      "user_favorited" ("question_id", "user_id")
    VALUES
      ($1, $2)
  ;`

  try {

    const checkFav = await pool.query(ifFavExists, [questionId, userId])

    if (checkFav.rows.length < 1) {
      await pool.query(insertFav, [questionId, userId])
      console.log('in fav, this would add somethign to server', checkFav.rows);
      res.sendStatus(200)
    } else {
      
      console.log('looks like something is in the DB already!', checkFav.rows);
      res.sendStatus(200)
    }

  } catch (error) {
    console.log('error ADDING favorite to database', err);
    res.sendStatus(500)
  }

});

// DELETE - unlink user & question data
router.delete('/:question', rejectUnauthenticated, (req, res) => {
  const questionId = req.params.question

  // grab user id
  const userId = req?.user?.id;


  const sqlText = `
  DELETE FROM
  user_favorited
  WHERE question_id = $1 AND user_id = $2
  ;`

  pool.query(sqlText, [questionId, userId])
    .then((result) => {
      res.sendStatus(200)
    }).catch((err) => {
      console.log('error REMOVING favorite from database', err);
      res.sendStatus(500)
    });
});

module.exports = router;