import React from "react";
import LogOutButton from "../../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";

// MUI IMPORTS
import { Box } from "@mui/material";

// CUSTOM COMPONENTS
import JournalContainer from "../JournalContainer/JournalContainer";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector(store => store.user);

  const viewContainerStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "0 px",
  };

  const favoritesContainerStyle = {
    padding: '6px',
    margin: '0 5px',
    backgroundColor: 'cadetblue',
    maxWidth: '45%',
    minWidth: '40%',
    width: '45%',
    maxHeight: '675px'
  };

  const journalContainerStyle = {
    backgroundColor: 'cadetblue',
    padding: '6px',
    maxWidth: '45%',
    width: '100%',
    maxHeight: '675px'
  };

  return (
    <>
      {/* <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
      </div> */}
      <Box sx={viewContainerStyle}>
        <Box sx={favoritesContainerStyle}>
          <FavoritesContainer />
        </Box>
        <Box sx={journalContainerStyle}>
          <JournalContainer />
        </Box>
      </Box>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
