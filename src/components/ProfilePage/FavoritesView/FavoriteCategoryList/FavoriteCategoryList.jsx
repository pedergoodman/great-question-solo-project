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
import FavoriteQuestionItem from "../FavoriteQuestionItem/FavoriteQuestionItem";

export default function FavoriteCategoryList({ question_data }) {
  

  
  // TODO Link with dispatch
  const [fav, setFav] = useState(false);

  const startJournal = () => {
    console.log("clicked start journal!");
  };


  return (
    <div>
      {/* maping the sub headers as unordered list */}
      {question_data.map(questionItem => (
        <FavoriteQuestionItem 
          key={`question-${questionItem.questionId}`} 
          questionItem={questionItem}
        />
      ))}
    </div>
  );
}
