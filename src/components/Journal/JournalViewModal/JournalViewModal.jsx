import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// MUI COMPONENTS
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import { Delete } from "@mui/icons-material";

// STYLING

// JOURNAL EDIT PAGE
export default function JournalEditPage() {
  // ~all objects within journals store
  const { activeJournal, userJournals } = useSelector(store => store.journals);
  const dispatch = useDispatch();
  const history = useHistory();

  // active journal display data
  const {
    journalId,
    journalTitle,
    journalBody,
    questionText,
    editedDate,
    createdDate,
  } = activeJournal;


// STYLING 
const modalPositioning = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  borderRadius: '16px',
  boxShadow: 24,
  padding: '2px 20px 22px',
};



  const formattedEditedDate = new Date(editedDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // BUTTONS
  // Clear activeJournal, take user to profile page
  const handleClickCancel = () => {
    dispatch({ type: "CLEAR_ACTIVE_JOURNAL" });
    history.push("/user-profile");
  };

  // SAVE to database
  const openJournalEditor = () => {

    history.push("/edit-journal");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      sx={{
        ...modalPositioning,
        boxShadow: "0 0 10px -5px #000000a8",
        width: "840px",
        height: "auto",
        m: "auto",
        backgroundColor: '#ece2df',
      }}
    >
      {/* button box! */}
      <Box
        sx={{
          display: "flex",
          bgcolor: "transparent",
          width: "100%",
          justifyContent: "flex-end",
          mt: "5px",
        }}
      >
        <Button onClick={handleClickCancel}>
          close
        </Button>
        <Button onClick={openJournalEditor}>edit</Button>
      </Box>

      {/* Question text */}
      <Box>
        <Typography
          variant="h5"
          display="block"
          gutterBottom
          sx={{
            textAlign: "right",
            m: "-13px 0px 16px 0",
            width: "540px",
            textAlign: "center",
          }}
        >
          {questionText}
        </Typography>
      </Box>

      {/* title and body */}
      <Box sx={{ width: "100%", borderRadius: "4px" }}>
        <Box
          container
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            bgColor: "light-grey",
          }}
        >
          {/* TITLE */}
          <Typography
            variant="h5"
            display="block"
            gutterBottom
            sx={{ textAlign: "left", m: "30px 12px 0px", fontWeight: 600 }}
          >
            {journalTitle}
          </Typography>
          {/* <TextField
            id="standard-basic"
            placeholder="Add a Title"
            variant="standard"
            value={journalTitle}
            sx={{ width: "80%", bgcolor: "blue[900]", m: "6px 0 8px 24px" }}
            onChange={event => {
              onEditChange(event.target.value, "journalTitle");
            }}
          /> */}
          <Typography
            variant="overline"
            display="block"
            gutterBottom
            sx={{ textAlign: "right", m: "30px 12px 0px", lineHeight: 1 }}
          >
            {formattedEditedDate}
          </Typography>
        </Box>
        {/* BODY */}
        <Typography
            variant="body1"
            display="block"
            gutterBottom
            sx={{ textAlign: "center", m: "30px 12px 0px", height: '300px', fontSize: '1.4rem', fontFamily: 'ui-monospace' }}
          >
            {journalBody}
          </Typography>

      </Box>
    </Grid>
  );
}
