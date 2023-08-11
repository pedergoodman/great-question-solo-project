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
function RandomAllBubble({ allQuestionsListToMap }) {
  // create list of all all questions with category data attached to each question
  const categoryList = createQuestionList(allQuestionsListToMap);

  // console.log('in random bubbule allQuestionsList is:', categoryList);

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
    width: "200px",
    height: "200px",
    borderRadius: "100%",
    background: "#386270",
    m: "auto",
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
              sx={{
                textAlign: "center",
                m: 0,
                fontSize: "1.6rem",
                fontWeight: "600",
              }}
            >
              RANDOM!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <>
        <Modal
          sx={{ backdropFilter: "blur(8px)" }}
          open={open}
          onClose={handleCloseCategory}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <QuestionCard
            handleCloseCategory={handleCloseCategory}
            categoryList={categoryList}
          />
        </Modal>
      </>
    </>
  );
}

export default RandomAllBubble;
