import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// MUI COMPONENTS
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Fab } from "@mui/material";

// MUI ICONS
import EditIcon from "@mui/icons-material/Edit";

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

const journalCardContainerStyle = {
  maxWidth: "750px",
  margin: "auto",
  height: "800px",
  maxHeight: "800px",
  width: "100%",
  maxHeight: "675px",
  backgroundColor: "transparent",
  position: "relative",
  overflowY: "scroll",
  flexBasis: "calc(50% + -5px)",
  padding: "0px",
  boxShadow: "0 0 8px 0px #00000029",
  borderRadius: "10px",
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
  
  const journalTitle = 'Claws of Fate, Heart of Freedom'
  const questionText = "Do you believe in fate or free will? Why?";
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

  const [isNewJournal, setIsNewJournal] = useState(true);
  const [editMode, SetEditMode] = useState(false);

  // turn these into components?? and handle submission within each?
  const newJournalBtns = (
    <>
      <Button>discard</Button>
      <Button>save</Button>
    </>
  );

  const editJournalBtns = (
    <>
      <Button>cancel</Button>
      <Button>save</Button>
    </>
  );

  return (
    <Box xs={6} sx={journalCardContainerStyle}>
      <Box sx={{ width: "auto", bgcolor: "red", padding: "8px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">Title: {journalTitle}</Typography>
          <Box sx={{ display: "flex" }}>
            {isNewJournal ? newJournalBtns : editJournalBtns}
          </Box>
        </Box>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {questionText}
        </Typography>
      </Box>

      <Box
        sx={{ width: "auto", bgcolor: "blue", padding: "12px", height: "100%" }}
      >
        <Typography sx={{ textAlign: "right", mb: "15px", color: "white" }}>
          {editedDate}
        </Typography>
    
        <Typography variant="body1" sx={{ color: "white" }}>
          {journalBody}
        </Typography>
      </Box>
    </Box>
  );
}

// (<Card variant="outlined">
// {/* TODO - action area opens to modal view */}
// <CardContent sx={{ padding: "2px 8px 12px" }}>
// <Box sx={titleBarStyle}>
//   <Typography variant="h5" component="div">
//     Journal Title
//     {/* {journalTitle} */}
//   </Typography>
// </Box>
// <Box component="span" sx={subTitleStyle}>
//   {/* <Typography sx={{ m: "-8px 0 10px 7px" }} color="text.secondary">
// {categoryName}
// </Typography> */}
//   <Typography sx={{ m: "-8px 0 10px 7px" }} color="text.secondary">
//     8.5.23
//     {/* {formattedCreatedDate} */}
//   </Typography>
// </Box>
// <Typography variant="body2">body goes here</Typography>
// {/* <Typography variant="body2">{journalBody}</Typography> */}
// </CardContent>
// </Card>)
