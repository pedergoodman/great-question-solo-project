import * as React from "react";
import { useState } from "react";
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



export default function QuestionCard({ handleCloseCategory, categoryList}) {
  const [isFavorited, setIsFavorited] = useState(true)
  


  const handleNewJournalBtn = () => {
    console.log("New Journal Button Clicked!");
    console.log("This will take you to a new page 📓");
  };

  const handleToggleFavorite = () => {
    console.log("Favorite clicked!");
    console.log("isFavorited is:", isFavorited);
    setIsFavorited(!isFavorited)
  };


  const handleNewQuestion = () => {
    console.log('a new question will appear here!!!');
    console.log('the question set is:');
    console.log(categoryList);
  }


  return (
    <>
      <Box sx={{ ...style, width: 600 }}>
        <div id="question-modal-top-row">
          <p>category</p>
          <Button variant="contained" onClick={handleCloseCategory}>
            <ClearIcon />
          </Button>
        </div>
        <div id="question-modal-main-text">
          <h2 id="parent-modal-title">
            Would you take it if you had the opportunity to be immortal?
          </h2>
        </div>
        <div id="question-modal-refresh-button">
          <Button 
            variant="contained"
            endIcon={<RefreshIcon />}
            onClick={handleNewQuestion}
          >
            New Question
          </Button>
        </div>
        <div id="question-modal-lower-btn-bar">
          <Button variant="contained" onClick={handleToggleFavorite}>
            {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
