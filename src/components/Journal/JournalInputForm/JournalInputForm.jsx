import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// MUI COMPONENTS
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";

// STYLING

// JOURNAL EDIT PAGE
export default function JournalEditPage() {
  // ~all objects within journals store
  const { activeJournal, userJournals } = useSelector(store => store.journals);
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    journalId,
    journalTitle,
    journalBody,
    questionId,
    questionText,
    editedDate,
    createdDate,
  } = activeJournal;

  console.log("activeJournal is:", activeJournal);
  console.log("userJournals is:", userJournals);
  // console.log('created date is:', createdDate);
  // useEffect(() => {
  //   dispatch({
  //     type: "FETCH_JOURNALS",
  //   });
  // }, []);

  // on change dispatch
  const onEditChange = (value, propertyToChange) => {
    dispatch({
      type: "ON_JOURNAL_CHANGE",
      payload: {
        propertyToChange: propertyToChange,
        value: value,
      },
    });
  };

  if (!createdDate) {
    const setDateNow = new Date();

    console.log("created date is empty");
    onEditChange(setDateNow, "createdDate");
    onEditChange(setDateNow, "editedDate");
  } else if (!editedDate) {
    console.log("created date is:", createdDate);
    const setDateNow = new Date();
    onEditChange(setDateNow, "editedDate");
  }

  // date formatting
  const formattedCreatedDate = new Date(createdDate).toLocaleDateString(
    "en-us",
    { year: "numeric", month: "short", day: "numeric" }
  );

  const formattedEditedDate = new Date(editedDate).toLocaleDateString(
    "en-us", 
    { year: "numeric", month: "short", day: "numeric" }
  );

  // Clear activeJournal, take user to profile page
  const handleClickCancel = () => {
    console.log("clicked handleClickCancel");
    // TODO - useHistory back to profile
    dispatch({ type: "CLEAR_ACTIVE_JOURNAL" });
    history.push("/user-profile");
  };

  const handleClickSave = () => {
    console.log("clicked handleClickSave, active journal is:", activeJournal);
    // post dispatch to journal
    dispatch({
      type: "CREATE_JOURNAL",
      payload: activeJournal,
    });
    // TODO - handle createdDate and editedDate
    // handle in the backend?
    // actually maybe update here so something displays right,
    // needs to be conditional if it exists already or not
    // POST - timestamp both created & edited in SQL
    // TODO - clear active
    // TODO - useHistory back to profile
  };

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
        <Button onClick={handleClickCancel}>discard</Button>
        <Button onClick={handleClickSave}>save</Button>
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
          <TextField
            id="standard-basic"
            placeholder="Add a Title"
            variant="standard"
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
            {/* add conditional here */}
            {formattedEditedDate}
          </Typography>
        </Box>

        <TextField
          multiline
          rows={24}
          size="small"
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
