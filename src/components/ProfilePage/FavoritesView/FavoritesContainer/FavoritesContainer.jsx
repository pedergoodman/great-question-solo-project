import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createCategoryListItem } from "../../../../utils/utils";

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

// JOURNAL CONTAINER
export default function JournalContainer() {
  const { favoriteQuestions, customQuestions } = useSelector(
    store => store.questions
  );

  // // convert custom list to "category obj" and add to favorites list
  const customAsCategory = createCategoryListItem(
    customQuestions,
    "Custom Questions"
  );
  const favoriteListToMap = [...favoriteQuestions, customAsCategory];

  // styling for favorites list headers
  // console.group('Figuring out favs display');
  // console.log("favoritesList is:", favoriteQuestions);
  // console.log("customQuestions is:", customQuestions);
  // console.log("customAsCategory is:", customAsCategory);
  // console.log("favoriteListToMap is:", favoriteListToMap);
  // console.groupEnd()

  return (
    <List sx={listHeaderStyle} subheader={<li />}>
      {/* mapping categories and reflated questions to list */}
      {favoriteListToMap.map(questionCategory => (
        <li key={questionCategory.categoryData.categoryName}>
          <FavoriteCategoryHeader questionCategory={questionCategory} />
        </li>
      ))}
      {/* <FavoriteCategoryHeader customAsCategory={customAsCategory} /> */}
    </List>
  );
}
