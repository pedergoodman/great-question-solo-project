import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

// MUI COMPONENTS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, colors } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

// CUSTOM COMPONENTS
import QuestionCard from "../QuestionCard/QuestionCard";
import { createQuestionList } from "../../utils/utils";



// RANDOM ALL BUBBLE
  // Button to 
function RandomAllBubble() {
  // questionList from store, sorted by category by objects {categoryData, questionData}
  const allQuestionsList = useSelector(store => store.allQuestions);

  // create list of all all questions with category data attached to each question
  const categoryList = createQuestionList(allQuestionsList);

  console.log('in random bubbule allQuestionsList is:', allQuestionsList );


  // QuestionCard Modal control
  const [open, setOpen] = useState(false);

  const handleOpenCategory = () => {
    setOpen(true);
  };

  const handleCloseCategory = () => {
    setOpen(false);
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
        <CardActionArea sx={{ height: "100%" }} onClick={handleOpenCategory}>
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
      <>
        <Modal
          open={open}
          onClose={handleCloseCategory}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <QuestionCard handleCloseCategory={handleCloseCategory} categoryList={categoryList}/>
        </Modal>
      </>
    </>
  );
}

export default RandomAllBubble;
