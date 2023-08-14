import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { IconButton } from "@mui/material";
import { getRandomIndex } from "../../utils/utils";

// STYLING
const questionCardStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  borderRadius: "16px",
  boxShadow: 24,
  padding: "2px 20px 22px",
};

// currentRandomQuestion

// Question Card
export default function QuestionCard({
  handleCloseCategory,
  categoryList,
  selectedQuestion,
  bubbleColor,
}) {
  // managing data state
  const dispatch = useDispatch();
  const history = useHistory();
  const hiddenQuestion = categoryList.find(x => x.questionId == 14);
  const activeQuestion = useSelector(
    store => store.randomCard.currentRandomQuestion
  );
  // const [questionHistory, setQuestionHistory] = useState([]);

  console.log("hiddenQuestion is", hiddenQuestion);
  const hiddenButton = () => {
    if (hiddenQuestion) {
      dispatch({
        type: "SET_ACTIVE_QUESTION",
        payload: hiddenQuestion,
      });
    }
  };

  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: getRandomIndex(categoryList),
    });
  }, []);

  // Sets the active journal and opens a new journal page!
  const handleNewJournalBtn = () => {
    // dispatch({
    //   type: 'SET_QUESTION_HISTORY',
    //   payload: activeQuestion
    // });

    dispatch({
      type: "SET_ACTIVE_JOURNAL",
      payload: activeQuestion,
    });

    history.push("/edit-journal");
  };

  const handleToggleFavorite = () => {
    // check if activeQuestion.isFavorited is true or not
    if (activeQuestion.isFavorited) {
      // Sends an update to the DB to remove a favorite
      console.log("sending remove favorite");
      // !activeQuestion.isFavorited
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: activeQuestion.questionId,
      });

      activeQuestion.isFavorited = !activeQuestion.isFavorited;
    } else {
      // !activeQuestion.isFavorited
      // Sends an update to the DB to add a favorite
      console.log("sending add favorite");
      dispatch({
        type: "ADD_FAVORITE",
        payload: activeQuestion.questionId,
      });

      activeQuestion.isFavorited = !activeQuestion.isFavorited;
    }
  };

  const handleNewQuestion = () => {
    // setQuestionHistory([...questionHistory, activeQuestion]);
    // console.log(questionHistory);
    dispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: getRandomIndex(categoryList),
    });
  };

  /*   
  const handleUndo = () => {
    
  }

  const handleRedo = () => {
    
  } 
  */

  return (
    <>
      <Box sx={{ ...questionCardStyle, bgcolor: "#ece2df" }}>
        <div id="question-modal-top-row">
          <p>{activeQuestion.categoryName}</p>
          <IconButton onClick={handleCloseCategory}>
            <ClearIcon />
          </IconButton>
        </div>

        <div id="question-modal-main-text" onClick={hiddenButton}>
          <h2 id="parent-modal-title">{activeQuestion.questionText}</h2>
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
            sx={{
              width: "35%",
              height: "45px",
              minWidth: "fit-content",
              backgroundColor: "#386270",
              "&:hover": { backgroundColor: "#527885" },
            }}
            // onKeyDown={(event) => {
            //   console.log('key pressed is:', event.key );
            // }}
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
          <IconButton onClick={handleToggleFavorite}>
            {activeQuestion.isFavorited ? (
              <FavoriteIcon sx={{ color: "#386270" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#386270" }} />
            )}
          </IconButton>
          <Button
            variant="contained"
            endIcon={<ChevronRightIcon />}
            onClick={handleNewJournalBtn}
            sx={{
              backgroundColor: "#6da67c",
              "&:hover": { backgroundColor: "#81a68b" },
            }}
          >
            New Journal
          </Button>
        </div>
      </Box>
    </>
  );
}
