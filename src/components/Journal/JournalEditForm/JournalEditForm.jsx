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

  // TODO on change dispatches
  const onEditChange = (value, propertyToChange) => {
    dispatch({
      type: "ON_JOURNAL_CHANGE",
      payload: {
        propertyToChange: propertyToChange,
        value: value,
      },
    });
  };

  // setting current date
  const setDateNow = new Date();

  // sets editedDate to today
  useEffect(() => {
    onEditChange(setDateNow, "editedDate");
  }, []);

  // conditionally apply date to created date/edited date
  if (!createdDate) {
    onEditChange(setDateNow, "createdDate");
    // onEditChange(setDateNow, "editedDate");
  }

  // date formatting
  const formattedCreatedDate = new Date(createdDate).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

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
  const handleClickSave = () => {
    onEditChange(setDateNow, "editedDate");

    // CONDITIONAL update if journalId exists, create if it doesn't 
    if (journalId) {
      // update journal in DB
      dispatch({
        type: "UPDATE_JOURNAL",
        payload: activeJournal,
      });
    } else {
      // create journal in DB
      dispatch({
        type: "CREATE_JOURNAL",
        payload: activeJournal,
      });
    }

    // Clear activeJournal, take user to profile page
    dispatch({ type: "CLEAR_ACTIVE_JOURNAL" });
    history.push("/user-profile");
  };

  const isDisabled = journalTitle && journalBody ? false : true;


  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      sx={{
        boxShadow: "0 0 10px -5px #000000a8",
        width: "840px",
        height: "auto",
        m: "auto",
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
          {journalId ? "cancel" : "discard"}
        </Button>
        <Button disabled={isDisabled} onClick={handleClickSave}>save</Button>
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
          <TextField
            id="standard-basic"
            placeholder="Add a Title"
            variant="standard"
            value={journalTitle}
            sx={{ width: "80%", bgcolor: "blue[900]", m: "6px 0 8px 24px" }}
            onChange={event => {
              onEditChange(event.target.value, "journalTitle");
            }}
          />
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
        <TextField
          multiline
          rows={24}
          size="small"
          value={journalBody}
          placeholder=".....what's on your mind?"
          sx={{ width: "100%" }}
          onChange={event => {
            onEditChange(event.target.value, "journalBody");
          }}
        />
      </Box>
    </Grid>
  );
}
