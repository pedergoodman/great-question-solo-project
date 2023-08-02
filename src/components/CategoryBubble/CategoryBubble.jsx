import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// MUI COMPONENTS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { createCategoryList } from "../../utils/utils";


// CUSTOM COMPONENTS

function CategoryCard({ questionCategory }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const categoryName = questionCategory.category_data.categoryName;
  const questionData = questionCategory.question_data

  // console.log('in CategoryCard: questionCategory is:', questionCategory);

  const handleClickCategory = () => {
  // TODO need to through a refresh somewhere in here when a user logs out
  // not sure if this works?
    // dispatch({
    //   type: "FETCH_QUESTIONS"
    // })
  const categoryList = createCategoryList([questionCategory])

  console.log(`${categoryName} clicked! questions are:`, categoryList);  
  }

  const bubbleContainerStyling = {
    width: "150px",
    height: "150px",
    borderRadius: "100%",
    background: "chocolate",
    m: '10px'
  };


  return (
    <>
      <Card sx={bubbleContainerStyling}>
        <CardActionArea 
          sx={{ height: "100%" }}
          onClick={handleClickCategory}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              sx={{ textAlign: "center", m: 0 }}
            >
              {categoryName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CategoryCard;
