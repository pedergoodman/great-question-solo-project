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
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ChevronRight } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// CUSTOM COMPONENTS
import FavoriteCategoryHeader from "../FavoriteCategoryHeader/FavoriteCategoryHeader";

export default function JournalContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  // need to replace this with favories but the full list is nice so i have more data to view
  const questionsList = useSelector(store => store.questions);
  console.log("in profile questionsList is:", questionsList);

  // grabs question data and fill bubbles!
  useEffect(() => {
    dispatch({
      type: "FETCH_QUESTIONS",
    });
  }, []);

  // styling for favorites list headers
  const listHeaderStyle = {
    width: "100%",
    bgcolor: "background.paper",
    position: "relative",
    overflow: "auto",
    maxHeight: "675px",
    paddingBottom: 0,
    "& ul": { padding: 0 },
  };

  return (
    <List sx={listHeaderStyle} subheader={<li />}>
      {/* mapping categories and reflated questions to list */}
      {questionsList.map(questionCategory => (
        <li key={questionCategory.categoryData.categoryName}>
          <FavoriteCategoryHeader questionCategory={questionCategory} />
        </li>
      ))}
    </List>
  );
}
