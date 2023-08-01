import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";


// CUSTOM COMPONENTS
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";




function LandingPage() {
  const user = useSelector(store => store.user)
  const questionsList = useSelector(store => store.questions)
  const history = useHistory();
  const dispatch = useDispatch();


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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {questionsList.map(questionCategory => (
          <CategoryCard 
            key={questionCategory.category_data.categoryId} 
            questionCategory={questionCategory} 
          />
        ))}
      </Box>
    </div>
  );
}

export default LandingPage;
