const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get questions from server
router.get('/all', (req, res) => {
  // grab user id
  const userId = req?.user?.id;
  // console.log('req.user.id is:', req?.user?.id);


  // grab items by category with all the sub questions
  // also grabs user added quetions and user favorited items 
  const loggedInSqlQuery = `
    SELECT 
      json_build_object(
        'categoryId', categories.id, 
        'categoryName', category_name
      ) AS category_data,
      json_agg(
        json_build_object(
          'questionId', questions.id, 
          'questionText', question, 
          'userAddedId', questions.user_added_id,
          'isFavorited', user_favorited.user_id
        )
      ) AS question_data
    FROM categories
    JOIN question_categories 
      ON categories.id = question_categories.category_id
    JOIN questions
      ON question_categories.question_id = questions.id
    LEFT JOIN user_favorited
      ON user_favorited.question_id = questions.id
      AND user_favorited.user_id = $1
    WHERE 
      user_added_id IS NULL OR user_added_id = $1
    GROUP BY 
      categories.id,
      category_name
    ;`


  // grab the base set of questions for the home page if no user 
  // is logged in. 
  const noUserSqlQuery = `
    SELECT 
    json_build_object(
      'categoryId', categories.id, 
      'categoryName', category_name
    ) AS category_data,
      
    json_agg(
      json_build_object(
        'questionId', questions.id, 
        'questionText', question 
      )
    ) AS question_data
    
    FROM categories
    JOIN question_categories 
      ON categories.id = question_categories.category_id
    JOIN questions
      ON question_categories.question_id = questions.id
    WHERE 
      user_added_id IS NULL
    GROUP BY categories.id
    ;`

  if (req?.user?.id) {
    // if a user is logged in send this query
    pool.query(loggedInSqlQuery, [userId])
      .then((result) => {
        res.send(result.rows)
      }).catch((err) => {
        console.log('error GETing categories from database', err);
        res.sendStatus(500)
      });
  } else {
    // if no user is logged in send this query
    pool.query(noUserSqlQuery)
      .then((result) => {
        res.send(result.rows)
      }).catch((err) => {
        console.log('error GETing categories from database', err);
        res.sendStatus(500)
      });
  }

});




// TODO - user post new question, add user auth
router.post('/favorite', (req, res) => {

  // grab user id
  const userId = req?.user?.id;



});

module.exports = router;
