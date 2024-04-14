import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createCategoryListItem } from "../../../../utils/utils";

// MUI COMPONENTS
import List from "@mui/material/List";
// CUSTOM COMPONENTS
import FavoriteCategoryHeader from "../FavoriteCategoryHeader/FavoriteCategoryHeader";
import { Box, Divider, Typography } from "@mui/material";

// styling for favorites list headers
const listHeaderStyle = {
  width: "100%",
  bgcolor: "background.paper",
  position: "relative",
  overflow: "auto",
  maxHeight: "95%",
  paddingBottom: 0,
  "& ul": { padding: 0 },
  backgroundColor: '#fdf9f8',
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


  const favoriteListToMap = [...favoriteQuestions];
  // const favoriteListToMap = [...favoriteQuestions, customAsCategory];

  // console.group('Figuring out favs display');
  // console.log("favoritesList is:", favoriteQuestions);
  // console.log("customQuestions is:", customQuestions);
  // console.log("customAsCategory is:", customAsCategory);
  // console.log("favoriteListToMap is:", favoriteListToMap);
  // console.groupEnd()

  return (
    <Box sx={{width: '100%'}}>
      <Typography variant="h6" sx={{ padding: "4px 10px",fontWeight: '800' }}>
        Your Favorites
      </Typography>
      <Divider sx={{mb: '5px'}}/>
      <List sx={listHeaderStyle} subheader={<li />}>
        {/* mapping categories and reflated questions to list */}
        {favoriteListToMap.map(questionCategory => (
          <li key={questionCategory.categoryData.categoryName}>
            <FavoriteCategoryHeader questionCategory={questionCategory} />
          </li>
        ))}
        {/* <FavoriteCategoryHeader customAsCategory={customAsCategory} /> */}
      </List>
    </Box>
  );
}
