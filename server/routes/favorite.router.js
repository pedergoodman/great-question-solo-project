const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




router.post('/', (req, res) => {

  const questionId = req.body.questionID
  // grab user id
  const userId = req?.user?.id;


  const sqlText = `
    INSERT INTO
      "user_favorited" ("question_id", "user_id")
    VALUES
      ($1, $2);`


  // console.log('in server favorite POST route');
  // console.log('questionId is:', questionId, 'userId is:', userId);

  pool.query(sqlText, [questionId, userId])
    .then((result) => {
      res.sendStatus(200)
    }).catch((err) => {
      console.log('error ADDING favorite to database', err);
      res.sendStatus(500)
    });

});


router.delete('/:question', (req, res) => {
  const questionId = req.params.question

  // grab user id
  const userId = req?.user?.id;


  const sqlText = `
  DELETE FROM
  user_favorited
  WHERE question_id = $1 AND user_id = $2
  ;`

  

  // console.log('in server favorite DELETE route');
  // console.log('questionId is:', questionId, 'userId is:', userId);

  pool.query(sqlText, [questionId, userId])
    .then((result) => {
      res.sendStatus(200)
    }).catch((err) => {
      console.log('error REMOVING favorite from database', err);
      res.sendStatus(500)
    });


});

module.exports = router;