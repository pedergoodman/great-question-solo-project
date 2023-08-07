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




function LandingPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  // bring data in from store
  const user = useSelector(store => store.user)
  const {
    allQuestions, 
    favoriteQuestions, 
    customQuestions
  } = useSelector(store => store.questions)

  console.log('allQuestions is', allQuestions);



  // grabs question data and user specific data to fill bubbles!
  useEffect(() => {
    dispatch({
      type: "FETCH_QUESTIONS"
    })
  }, [])


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
      <RandomAllBubble />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {allQuestions?.map(questionCategory => (
          <CategoryCard 
            key={questionCategory.categoryData.categoryId} 
            questionCategory={questionCategory} 
          />
        ))}
      </Box>
    </div>
  );
}

export default LandingPage;
