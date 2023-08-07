import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import CategoryCard from "../CategoryBubble/CategoryBubble";
import { useDispatch, useSelector } from "react-redux";


// CUSTOM COMPONENTS
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import RandomAllBubble from "../RandomAllBubble/RandomAllBubble";




function LandingPage() {
  const user = useSelector(store => store.user)
  const questionsList = useSelector(store => store.allQuestions)
  const history = useHistory();
  const dispatch = useDispatch();

  // console.log('in Landing page questionsList is:', questionsList);

  // grabs question data and fill bubbles!
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
        {questionsList.map(questionCategory => (
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
