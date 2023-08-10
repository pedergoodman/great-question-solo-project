import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./QuestionCard.css";

// MUI COMPONENTS
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// MUI ICONS
import ClearIcon from "@mui/icons-material/Clear";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RefreshIcon from "@mui/icons-material/Refresh";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";


// STYLING 
const questionCardStyle = {
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

// 

// Question Card
export default function QuestionCard({
  handleCloseCategory,
  categoryList,
  selectedQuestion,
}) {
  // managing data state
  const dispatch = useDispatch();
  const history = useHistory();

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
  

  // Sets the active journal and opens a new journal page!
  const handleNewJournalBtn = () => {
    dispatch({
      type: "SET_ACTIVE_JOURNAL",
      payload: currentQuestion,
    });
    
    history.push('/create-journal')
  };

  const handleToggleFavorite = () => {
    // check if currentQuestion.isFavorited is true or not
    if (currentQuestion.isFavorited) {
      // Sends an update to the DB to remove a favorite
      console.log('sending remove favorite');
      // !currentQuestion.isFavorited
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: currentQuestion.questionId,
      });
      
    } else {
      // !currentQuestion.isFavorited
      // Sends an update to the DB to add a favorite
      console.log('sending add favorite');
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
      <Box sx={{ ...questionCardStyle, width: 600 }}>
        <div id="question-modal-top-row">
          <p>{currentQuestion.categoryName}</p>
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
