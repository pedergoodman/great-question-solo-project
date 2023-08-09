import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI COMPONENTS
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  Container,
  Fab,
  Grid,
  Input,
  TextField,
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";

// MUI ICONS
import EditIcon from "@mui/icons-material/Edit";
import { grey } from "@mui/material/colors";

// STYLING
const titleBarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const subTitleStyle = {
  display: "flex",
  WebkitAlignItems: "center",
  WebkitBoxAlign: "center",
  MsFlexAlign: "center",
  alignItems: "center",
  justifyContent: "space-between",
  width: "50%",
  marginLeft: "8px",
};

const textAreaStyle = {
  width: "100%",
  height: "100%",
  // fontFamily: IBM Plex Sans, sans-serif,
  fontSize: "0.875rem",
  fontWeight: "400",
  lineHeight: 1.5,
  padding: "12px",
  borderRadius: "12px 12px 0 12px",
  // color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]},
  // background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'},
  // border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]},
  boxShadow: "0px 2px 2px grey",

  "&:hover": {
    borderColor: "blue",
  },
  // "&:focus": {
  //   borderColor: 'blue',
  //   boxShadow: '0 0 0 3px blue',
  // }
};

const journalCardContainerStyle = {
  maxWidth: "750px",
  maxWidth: "840px",
  margin: "auto",
  height: "800px",
  // maxHeight: "800px",
  // width: "100%",
  // backgroundColor: "transparent",
  // position: "relative",
  // overflowY: "scroll",
  // flexBasis: "calc(50% + -5px)",
  boxShadow: "0 0 8px 0px #00000029",
  borderRadius: "10px",
  padding: 0,
  borderRadius: "12px 12px 0 12px",
};

export default function JournalEditPage() {
  // ~all objects within journals store
  const { activeJournal /* userJournals */ } = useSelector(
    store => store.journals
  );
  const dispatch = useDispatch();

  // journalId
  // journalTitle
  // journalBody
  // questionId
  // questionText
  // editedDate

  console.log("activeJournal is:", activeJournal);

  // TODO - check if journalId exists. if not, it's a new journal!
  // conditional save components
  // if no id:
  // "discard" -> history.back()
  // "add journal" -> view mode
  // --> but how would I get the id?
  // -->

  // if id: "cancel", "save"
  // reset state, post

  // TODO - how to handle created date and or edited date
  //  mostly handling edited date here, but POST dates should match
  // maybe both of these handle in the backend?
  // POST - timestamp both created & edited in SQL
  // PUT - new timestamp edited only

  // TODO - conditional post/put dispatch
  // dependent on if journalId provided
  // will also need to clear the journalID from state on submit or provide a blank "id" from a "newJournal" button

  useEffect(() => {
    dispatch({
      type: "FETCH_JOURNALS",
    });
  }, []);

  // this is what is in a journal objects, what do i need to access or to edit?
  // const {
  // journalId
  // journalTitle
  // journalBody
  // questionId
  // questionText
  // editedDate

  // categoryId
  // categoryName
  // createdDate

  // } = activeJournal;

  // date formatting
  // const formattedCreatedDate = new Date(createdDate).toLocaleDateString(
  //   "en-us",
  //   { year: "numeric", month: "short", day: "numeric" }
  // );
  // const formattedEditedDate = new Date(editedDate).toLocaleDateString("en-us", {
  //   year: "numeric",
  //   month: "short",
  //   day: "numeric",
  // });

  const journalTitle = "Claws of Fate, Heart of Freedom";
  const questionText = "Do you believe in fate or free will? Why? Do you believe in fate or free will? Why? Do you believe in fate or free will? Why?";
  const journalBody = `Fate or free will? A ponderous question, one that 
    dances like the elusive tail of a wily mouse. Me, I've fought through battles, 
    hunted beneath moonlit skies, and pounced on destiny's whispers. Yet, I believe 
    in both. Fate, the invisible paw guiding me to unexpected corners of existence. 
    Free will, the untamed spirit that lets me choose my path, whether to chase that 
    flitting butterfly or curl up for a sun-soaked nap. In the end, it's a harmony of 
    the two, like the soft purr that underlies my fierce warrior's heart.`;
  const editedDate = "Aug 08, 2023";

  const openJournalEditor = () => {
    console.log("clicked openJournalEditor");
  };

  const openJournalPreview = () => {
    console.log("clicked openJournalPreview");
  };
  const handleToggleFavorite = () => {};
  // turn these into components?? and handle submission within each?
  const newJournalBtns = (
    <>
      <Button>discard</Button>
      <Button>save</Button>
    </>
  );

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
          mt: '5px'
        }}
      >
        
        <Button>cancel</Button>
        <Button>save</Button>
      </Box>
      {/* Question text */}
      <Box>
        <Typography
          variant="h5"
          display="block"
          gutterBottom
          sx={{
            textAlign: "right",
            m: '-13px 0px 16px 0',
            width: '540px',
            textAlign: 'center'
          }}
        >
          {questionText}
        </Typography>
      </Box>

      {/* title and body */}

      <Box sx={{ width: "99%", borderRadius: "4px" }}>
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
            sx={{ width: "80%", bgcolor: "blue[900]", m: "6px 0 0px 24px" }}
          />
          <Typography
            variant="overline"
            display="block"
            gutterBottom
            sx={{ textAlign: "right", m: "14px 9px 0px" }}
          >
            {editedDate}
          </Typography>
        </Box>

        <TextField
          multiline
          rows={24}
          size="small"
          placeholder=".....what's on your mind?"
          sx={{ width: "100%" }}
        />
      </Box>
    </Grid>
  );
}
