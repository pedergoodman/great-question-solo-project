import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// MUI COMPONENTS
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Collapse, IconButton, Typography } from "@mui/material";

// MUI ICONS
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function FavoriteQuestionItem({ questionItem }) {
  const { questionId, questionText, isFavorited } = questionItem;

  // TODO - toggle favorite dispatch
  const handleClickFavBtn = () => {
    console.log("clicked Fav: id to update:", questionId);
  };

  // TODO - start journal page
  const startJournal = () => {
    console.log("clicked start journal! Question selected is:", questionId);
  };

  return (
    <ListItem>
      <ListItemText primary={questionText} />
      <IconButton
        aria-label="fingerprint"
        color="secondary"
        onClick={handleClickFavBtn}
      >
        {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <IconButton
        aria-label="fingerprint"
        color="secondary"
        onClick={startJournal}
      >
        <MenuBookIcon />
      </IconButton>
    </ListItem>
  );
}
