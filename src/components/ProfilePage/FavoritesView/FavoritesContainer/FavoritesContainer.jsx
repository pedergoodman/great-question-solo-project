import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// MUI COMPONENTS
import List from "@mui/material/List";
// CUSTOM COMPONENTS
import FavoriteCategoryHeader from "../FavoriteCategoryHeader/FavoriteCategoryHeader";


const listHeaderStyle = {
  width: "100%",
  bgcolor: "background.paper",
  position: "relative",
  overflow: "auto",
  maxHeight: "675px",
  paddingBottom: 0,
  "& ul": { padding: 0 },
};

export default function JournalContainer() {

  const favoritesList = useSelector(store => store.favoriteQuestions)
  // styling for favorites list headers
  console.log('favoritesList is', favoritesList);

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
