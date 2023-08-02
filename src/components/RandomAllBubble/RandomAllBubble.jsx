import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

// MUI COMPONENTS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, colors } from "@mui/material";
import {createCategoryList, otherTestFunction} from '../../utils/utils'
import helpers from "../../utils/utils";

// CUSTOM COMPONENTS

function RandomQuestion() {
  // questionList from store, sorted by category by objects {category_data, question_data}
  const questionsList = useSelector(store => store.questions);
  
  // create list of all all questions with category data attached to each question
  const allQuestions = createCategoryList(questionsList)



  const selectRandomQuestion = () => {
    console.log(allQuestions);
  };

  // styling for "random all" button
  const bubbleContainerStyling = {
    width: "150px",
    height: "150px",
    borderRadius: "100%",
    background: "chocolate",
    m: "auto",
    backgroundColor: "blue",
  };

  return (
    <>
      <Card sx={bubbleContainerStyling} id="randomAllQuestions">
        <CardActionArea sx={{ height: "100%" }} onClick={selectRandomQuestion}>
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              sx={{ textAlign: "center", m: 0 }}
            >
              RANDOM ALL
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default RandomQuestion;
