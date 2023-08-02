


// TO TEST- may need to be different for individual categories but we'll see... 
  // MAYBE - add a "category_id" property to select a specific category in questionList???
  
export function createCategoryList(questionArray) {
  // console.log(questionArray);

  const finalArray = []
    // break out categories into an array of all questions
  // combine the category id/name into each question item
  for (const category of questionArray) {
    // separating out the category data ~{id, name}
    const categoryData = category.category_data;

    // for each question, in each category, attach categoryData
    for (const question of category.question_data) {
      // merge category info and question info, push to allQuestions array
      finalArray.push({ ...categoryData, ...question });
      // console.log(allQuestions);
    };
  };

  return finalArray;
}


// this doesn't do anything right now
// export function otherTestFunction(questionArray) {
//   console.log('inside test helper function!');
// }
