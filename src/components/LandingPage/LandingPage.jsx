import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import CategoryCard from "../CategoryBubble/CategoryBubble";
import { useDispatch, useSelector } from "react-redux";
// import { createQuestionList, createCategoryListItem } from "../../utils/utils";
import { createQuestionList, createCategoryListItem } from "../../utils/utils";

// CUSTOM COMPONENTS
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import RandomAllBubble from "../RandomAllBubble/RandomAllBubble";


// LANDING PAGE
function LandingPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  // bring data in from store
  const user = useSelector(store => store.user);

  const { allQuestions, favoriteQuestions, customQuestions } = useSelector(
    store => store.questions
  );

  let allQuestionsListToMap = [...allQuestions];



  // conditional for favorites list, if it's empty don't map it
  if (favoriteQuestions.length > 0) {
    // convert custom list to "category obj" and add to all question list
    const customAsCategory = createCategoryListItem(
      customQuestions,
      "Custom Questions"
    );
    allQuestionsListToMap.push(customAsCategory);
  }
  
  // conditional for custom list, if it's empty don't map it
  if (customQuestions.length > 0) {
  // convert favorite list to "category obj" and add to all question list
  const favAsQuestionList = createQuestionList(favoriteQuestions);
  const favAsCategory = createCategoryListItem(favAsQuestionList, "Favorites");

    allQuestionsListToMap.push(favAsCategory);
  }

  // grabs question data and user specific data to fill bubbles!
  useEffect(() => {
    dispatch({
      type: "FETCH_QUESTIONS",
    });
  }, []);

  return (
    <div className="container">
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ textAlign: "center" }}
      >
        Select a Category!
      </Typography>
      <RandomAllBubble allQuestionsListToMap={allQuestionsListToMap} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {allQuestionsListToMap?.map(questionCategory => (
          <CategoryCard
            key={questionCategory.categoryData.categoryName}
            questionCategory={questionCategory}
          />
        ))}
      </Box>
    </div>
  );
}

export default LandingPage;
