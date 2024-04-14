import React, { useState } from "react";

// MUI COMPONENTS
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Collapse, IconButton, Typography } from "@mui/material";

// MUI ICONS
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ChevronRight } from "@mui/icons-material";

// CUSTOM COMPONENTS
import FavoriteQuestionItem from "../FavoriteQuestionItem/FavoriteQuestionItem";

// FAVORITE CATEGORY HEADER
  // Display Category header & collapse list container
export default function FavoriteCategoryHeader({ questionCategory }) {
  // question List data
  const { questionData, categoryData } = questionCategory;
  const categoryName = categoryData.categoryName;

  // list view toggle state
  const [open, setOpen] = useState(true);

  // toggle hide/show individual category list
  const toggleCategorySection = () => {
    setOpen(!open);
  };


  const arrayOfColors = [
    // blues
    "#89c0d2",

    // sandy
    "#d1afa3",

    // greens
    "#adcdb5",

    // purples
    "#c1cdf0",

    // reds
    "#e3a28c",
  ];

  const randomIndex = Math.floor(Math.random() * arrayOfColors.length);

  return (
    <ul>
      {/* List header with  */}
      <ListSubheader sx={{ display: "flex", alignItems: "center", backgroundColor: arrayOfColors[randomIndex] }}>
        <IconButton
          aria-label="fingerprint"
          color='#386270'
          onClick={toggleCategorySection}
        >
          {open ? <ExpandMore /> : <ChevronRight />}
        </IconButton>
        <Typography>{categoryName}</Typography>
      </ListSubheader>

      {/* mapping the sub headers, collapsible */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {questionData.map(questionItem => (
          <FavoriteQuestionItem
            key={`${categoryName}-${questionItem.questionId}`}
            questionItem={questionItem}
          />
        ))}
      </Collapse>
    </ul>
  );
}
