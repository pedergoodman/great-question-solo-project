


// TO TEST- may need to be different for individual categories but we'll see... 
  // MAYBE - add a "category_id" property to select a specific category in questionList???
  


export function createQuestionList(categoryListArray) {
  
  const questionListArray = []
    // break out categories into an array of all questions
  // combine the category id/name into each question item
  for (const category of categoryListArray) {
    // separating out the category data ~{id, name}
    const categoryData = category.categoryData;

    // for each question, in each category, attach categoryData
    for (const question of category.questionData) {
      // merge category info and question info, push to allQuestions array
      questionListArray.push({ ...categoryData, ...question });
      // console.log(allQuestions);
    };
  };

  return questionListArray;
}



export function createCategoryListItem(questionListArray, categoryName) {
  // building an object
  const categoryListItem = {
    categoryData: {
      categoryName: categoryName
    },
    questionData: questionListArray

  }

  return categoryListItem;
}


export function getRandomIndex(categoryList) {

  let randomIndex;
  let lastIndex;

  do {
    randomIndex = Math.floor(Math.random() * categoryList.length);

  } while (randomIndex === lastIndex);

  lastIndex = randomIndex


      // get random index
    
    // return random index in categoryList
    return categoryList[randomIndex];



}