const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET user journals
router.get('/:id', (req, res) => {

  const userId = req.params.id;
  // const userId = req?.user?.id;

  const sqlText = `
    SELECT 
      journals.id AS "journalId",
      journals.title AS "journalTitle",
      journals.journal_entry AS "JournalBody",
      journals.created_date AS "CreatedDate",
      journals.edited_date AS "EditedDate",
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
  ;`

  pool.query(sqlText, [userId])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows)
    }).catch((err) => {
      console.log('error ADDING favorite to database', err);
      res.sendStatus(500)
    });




});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});


/**
 * DELETE route template
 */
router.delete('/', (req, res) => {
  // DELETE route code here
});


/**
 * PUT route template
 */
router.put('/', (req, res) => {
  // PUT route code here
});


module.exports = router;
