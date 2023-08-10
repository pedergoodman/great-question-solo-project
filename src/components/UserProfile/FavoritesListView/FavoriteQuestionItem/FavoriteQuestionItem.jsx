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
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// FAVORITE QUESTION ITEM
export default function FavoriteQuestionItem({ questionItem }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // values from questionItem
  const { questionId, questionText, isFavorited, userAddedId } = questionItem;

  // toggle favorite dispatch
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
    // Sets the active journal and opens a new journal page!
      dispatch({
        type: "SET_ACTIVE_JOURNAL",
        payload: questionItem,
      });

      history.push("/edit-journal");
  };

  // TODO - functionality to delete a custom question from the list
  const deleteCustomQuestion = () => {
    console.log("Delete Clicked!, question id is:", questionId);
  };

  // create delete button
  const deleteButton = (
    <IconButton
      aria-label="start-journal"
      color="secondary"
      onClick={deleteCustomQuestion}
    >
      <DeleteIcon />
    </IconButton>
  );

  return (
    <ListItem>
      <ListItemText primary={questionText} />
      {/* {userAddedId ? deleteButton : <></>} */}
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
