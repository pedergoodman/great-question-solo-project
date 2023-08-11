const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();



// GET all user journals from database
router.get('/', rejectUnauthenticated, (req, res) => {

  const userId = req?.user?.id;

  const sqlText = `
    SELECT 
      journals.id AS "journalId",
      journals.title AS "journalTitle",
      journals.journal_entry AS "journalBody",
      journals.created_date AS "createdDate",
      journals.edited_date AS "editedDate",
      journals.question_id AS "questionId",
      questions.question AS "questionText",
      categories.id AS "categoryId",
      categories.category_name AS "categoryName"
    FROM journals 
    JOIN questions
      ON journals.question_id = questions.id
    JOIN question_categories
      ON questions.id = question_categories.question_id
    JOIN categories
      ON question_categories.category_id = categories.id
    WHERE 
      journals.user_id = $1
    ORDER BY 
      journals.edited_date DESC
  ;`

  pool.query(sqlText, [userId])
    .then((result) => {
      // console.log(result.rows);
      res.send(result.rows)
    }).catch((err) => {
      console.log('error GETTING journal from database', err);
      res.sendStatus(500)
    });
});


// POST new journal to database
router.post('/', rejectUnauthenticated, (req, res) => {
  const { journalTitle, journalBody, createdDate, editedDate, questionId, } = req.body


  const valuesToInsert = [
    journalTitle,
    journalBody,
    createdDate,
    editedDate,
    questionId,
    req.user.id
  ]


  sqlText = `
  INSERT INTO
  journals (
    "title",
    "journal_entry",
    "created_date",
    "edited_date",
    "question_id",
    "user_id"
  )
VALUES
    ($1, $2, $3, $4, $5, $6)
  `

  pool.query(sqlText, valuesToInsert)
    .then((result) => {
      res.sendStatus(201)
    }).catch((err) => {
      console.log('error ADDING journal to database', err);
      res.sendStatus(500)
    });


});

// DELETE selected journal from database
router.delete('/:id', rejectUnauthenticated, (req, res) => {

  sqlText = `
    DELETE FROM
      "journals"
    WHERE 
      journals.id = $1 AND "user_id" = $2
  `


  pool.query(sqlText, [req.params.id, req.user.id])
    .then((result) => {
      res.sendStatus(201)
    }).catch((err) => {
      console.log('error DELETING journal from database', err);
      res.sendStatus(500)
    });

});


// UPDATE selected journal on database
router.put('/', rejectUnauthenticated, (req, res) => {

  const { journalTitle, journalBody, createdDate, editedDate, questionId, journalId } = req.body


  const valuesToInsert = [
    journalTitle,
    journalBody,
    editedDate,
    questionId,
    req.user.id,
    journalId
  ]


  sqlText = `
  UPDATE
    "journals"
  SET
    "title" = $1,
    "journal_entry" = $2,
    "edited_date" = $3,
    "question_id" = $4,
    "user_id" = $5
  WHERE 
    journals.id = $6 AND "user_id" = $5

  `

  pool.query(sqlText, valuesToInsert)
    .then((result) => {
      res.sendStatus(201)
    }).catch((err) => {
      console.log('error UPDATING journal in database', err);
      res.sendStatus(500)
    });



});


module.exports = router;
