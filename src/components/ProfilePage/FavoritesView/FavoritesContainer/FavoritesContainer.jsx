import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// MUI COMPONENTS
import List from "@mui/material/List";


// CUSTOM COMPONENTS
import FavoriteCategoryHeader from "../FavoriteCategoryHeader/FavoriteCategoryHeader";

export default function JournalContainer() {

  // need to replace this with favories but the full list is nice so i have more data to view
  const favoritesList = useSelector(store => store.favoriteQuestions)
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
      {favoritesList.map(questionCategory => (
        <li key={questionCategory.categoryData.categoryName}>
          <FavoriteCategoryHeader questionCategory={questionCategory} />
        </li>
      ))}
    </List>
  );
}
