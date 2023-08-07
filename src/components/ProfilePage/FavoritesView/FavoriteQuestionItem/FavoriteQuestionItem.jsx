import React from "react";
import { useDispatch } from "react-redux";

// MUI COMPONENTS
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";

// MUI ICONS
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";


export default function FavoriteQuestionItem({ questionItem }) {
  const dispatch = useDispatch();

  const { questionId, questionText, isFavorited } = questionItem;

  // TODO - toggle favorite dispatch
  const handleToggleFavorite = () => {
    console.log("clicked Fav: id to update:", questionId);
    // check if currentQuestion.isFavorited is true or not
    if (isFavorited) {
      // Sends an update to the DB to remove a favorite
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: questionId,
      });
      
    } else {
      // Sends an update to the DB to add a favorite
      dispatch({
        type: "ADD_FAVORITE",
        payload: questionId,
      });
    }
  };



  // TODO - functionality to open journal page and start new journal
  const startJournal = () => {
    console.log("clicked start journal! Question selected is:", questionId);
  };

  return (
    <ListItem>
      <ListItemText primary={questionText} />
      <IconButton
        aria-label="favorite"
        color="secondary"
        onClick={handleToggleFavorite}
      >
        {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <IconButton
        aria-label="start-journal"
        color="secondary"
        onClick={startJournal}
      >
        <MenuBookIcon />
      </IconButton>
    </ListItem>
  );
}
