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
import FavoriteCategoryList from "../FavoriteCategoryList/FavoriteCategoryList";

export default function FavoriteCategoryHeader({ questionCategory }) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { question_data, category_data } = questionCategory;
  const categoryName = category_data.categoryName;

  return (
    <ul>
      <ListSubheader sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="fingerprint"
          color="secondary"
          onClick={handleClick}
        >
          {open ? <ExpandMore /> : <ChevronRight />}
        </IconButton>
        <Typography>{categoryName}</Typography>
      </ListSubheader>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <FavoriteCategoryList question_data={question_data} />
      </Collapse>
    </ul>
  );
}
