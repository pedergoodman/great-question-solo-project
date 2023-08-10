import React, { useEffect } from "react";
import LogOutButton from "../../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";

// MUI IMPORTS
import { Box } from "@mui/material";

// CUSTOM COMPONENTS
import JournalListContainer from "../JournalListView/JournalListContainer/JournalListContainer";
import FavoritesListContainer from "../FavoritesListView/FavoritesListContainer/FavoritesListContainer";


// STYLING
const viewContainerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "0 px",
  height: '80vh',
};

const favoritesContainerStyle = {
  padding: "6px",
  margin: "0 5px",
  backgroundColor: "cadetblue",
  maxWidth: "45%",

};

const journalContainerStyle = {
  backgroundColor: "cadetblue",
  padding: "8px",
  maxWidth: "45%",
  
};


// USER PAGE
function UserPage() {
  const dispatch = useDispatch();

  // grabs question and journal data
  useEffect(() => {
    dispatch({
      type: "FETCH_QUESTIONS"
    });
    dispatch({
      type: "FETCH_JOURNALS"
    });
  }, []);

    

  return (
    <>
      <Box sx={viewContainerStyle}>
        <Box sx={favoritesContainerStyle}>
          <FavoritesListContainer />
        </Box>
        <Box sx={journalContainerStyle}>
          <JournalListContainer />
        </Box>
      </Box>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
