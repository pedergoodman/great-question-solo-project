const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/all', (req, res) => {
  const userId = req.user.id
  console.log(req.user);

  // grab items by category with all the sub questions
  const sqlQuery = `
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
        'isfavorited', user_favorited.user_id
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

  pool.query(sqlQuery, [userId])
    .then((result) => {
      res.send(result.rows)
    }).catch((err) => {
      console.log('error GETing categories from server', err);
      res.sendStatus(500)
    });




});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
