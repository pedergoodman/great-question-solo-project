import React, { useState } from "react";

// MUI COMPONENTS
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Collapse, IconButton, Typography } from "@mui/material";

// MUI ICONS
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ChevronRight } from "@mui/icons-material";

// CUSTOM COMPONENTS
import FavoriteQuestionItem from "../FavoriteQuestionItem/FavoriteQuestionItem";

export default function FavoriteCategoryHeader({ questionCategory }) {
  // question data to display
  const { question_data, category_data } = questionCategory;
  const categoryName = category_data.categoryName;

  // toggle hide/show individual category list
  const [open, setOpen] = useState(true);

  const toggleCategorySection = () => {
    setOpen(!open);
  };

  return (
    <ul>
      {/* List header with  */}
      <ListSubheader sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          onClick={toggleCategorySection}
        >
          {open ? <ExpandMore /> : <ChevronRight />}
        </IconButton>
        <Typography>{categoryName}</Typography>
      </ListSubheader>

      {/* mapping the sub headers, collapsible */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {question_data.map(questionItem => (
          <FavoriteQuestionItem
            key={`question-${questionItem.questionId}`}
            questionItem={questionItem}
          />
        ))}
      </Collapse>
    </ul>
  );
}
