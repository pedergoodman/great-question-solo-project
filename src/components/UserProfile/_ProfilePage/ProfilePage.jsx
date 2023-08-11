import React, { useEffect } from "react";
import LogOutButton from "../../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";

// MUI IMPORTS
import { Box, Divider, Typography } from "@mui/material";

// CUSTOM COMPONENTS
import JournalListContainer from "../JournalListView/JournalListContainer/JournalListContainer";
import FavoritesListContainer from "../FavoritesListView/FavoritesListContainer/FavoritesListContainer";

// STYLING
const viewContainerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "0 px",
  height: '90vh'
};

const favoritesContainerStyle = {
  padding: "6px",
  margin: "0 5px",
  maxWidth: "45%",
  borderRadius: "9px",
  boxShadow: "0 0 10px 0px rgb(0 0 0 / 55%)",
  display: "flex",
  justifyContent: "center",
  overflow: 'hidden',
  background: '#a0b5bc',
};

const journalContainerStyle = {
  padding: "8px",
  maxWidth: "45%",
  borderRadius: "9px",
  boxShadow: "0 0 10px 0px rgb(0 0 0 / 55%)",
  overflow: 'hidden',
  background: '#a0b5bc',
};

// USER PAGE
function UserPage() {
  const dispatch = useDispatch();

  // grabs question and journal data
  useEffect(() => {
    dispatch({
      type: "FETCH_QUESTIONS",
    });
    dispatch({
      type: "FETCH_JOURNALS",
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
