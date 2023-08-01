const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

  // grab items by category with all the sub questions
  const sqlQuery = `

  ;`
  // delete this later
  res.sendStatus(200)
  
  // pool.query(sqlQuery)
  //   .then((result) => {

  //     res.send(result.rows)
  //   }).catch((err) => {
  //     console.log('error GETing journals from server', err);
  //     res.sendStatus(500)
  //   });




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
