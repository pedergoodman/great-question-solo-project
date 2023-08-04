import * as React from "react";
import { useState, useEffect } from "react";
import "./QuestionCard.css";

// MUI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Icon, Modal } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RefreshIcon from "@mui/icons-material/Refresh";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Favorite } from "@mui/icons-material";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function QuestionCard({
  handleCloseCategory,
  categoryList,
  selectedQuestion,
}) {
  // managing data state
  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState("");
  // const [questionHistory, setQuestionHistory] = useState([]);

  useEffect(() => {
    // selected question would be passed from the profile page,
    // it isn't always expected, but if received needs to display first
    if (selectedQuestion) {
      setCurrentQuestion(selectedQuestion);
    } else {
      setCurrentQuestion(getRandomQuestion(categoryList));
    }
  }, []);

  function getRandomQuestion(categoryList) {
    // get random index
    const randomIndex = Math.floor(Math.random() * categoryList.length);
    // return random index in categoryList
    return categoryList[randomIndex];
  }

  // eventually will go to a new page!!
  const handleNewJournalBtn = () => {
    console.log("New Journal Button Clicked!");
    console.log("This will take you to a new page 📓");
  };

  const handleToggleFavorite = () => {
    // check if currentQuestion.isFavorited is true or not
    if (currentQuestion.isFavorited) {
      // Sends an update to the DB to remove a favorite
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: currentQuestion.questionId,
      });

      
    } else {
      // Sends an update to the DB to add a favorite
      dispatch({
        type: "ADD_FAVORITE",
        payload: currentQuestion.questionId,
      });
    }
  };

  const handleNewQuestion = () => {
    // setQuestionHistory([...questionHistory, currentQuestion]);
    // console.log(questionHistory);
    setCurrentQuestion(getRandomQuestion(categoryList));
  };

  /*   
  const handleUndo = () => {
    
  }

  const handleRedo = () => {
    
  } 
  */

  return (
    <>
      <Box sx={{ ...style, width: 600 }}>
        <div id="question-modal-top-row">
          <p>{categoryList[0].categoryName}</p>
          <Button variant="contained" onClick={handleCloseCategory}>
            <ClearIcon />
          </Button>
        </div>
        <div id="question-modal-main-text">
          <h2 id="parent-modal-title">{currentQuestion.questionText}</h2>
        </div>
        <div id="question-modal-refresh-button">
          {/* <Button 
            variant="contained"
            onClick={handleUndo}
          >
            <UndoIcon />
          </Button> */}
          <Button
            variant="contained"
            endIcon={<RefreshIcon />}
            onClick={handleNewQuestion}
          >
            New Question
          </Button>
          {/* <Button 
            variant="contained"
            onClick={handleRedo}
          >
            <RedoIcon />
          </Button> */}
        </div>
        <div id="question-modal-lower-btn-bar">
          <Button variant="contained" onClick={handleToggleFavorite}>
            {currentQuestion.isFavorited ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </Button>
          <Button
            variant="contained"
            endIcon={<ChevronRightIcon />}
            onClick={handleNewJournalBtn}
          >
            New Journal
          </Button>
        </div>
      </Box>
    </>
  );
}