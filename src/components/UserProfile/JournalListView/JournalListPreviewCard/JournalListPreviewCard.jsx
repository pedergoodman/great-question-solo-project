import * as React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

// MUI COMPONENTS
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Fab, IconButton, Modal } from "@mui/material";

// MUI ICONS
import EditIcon from "@mui/icons-material/Edit";
import { Delete } from "@mui/icons-material";
import { useState } from "react";
import JournalViewModal from '../../../Journal/JournalViewModal/JournalViewModal'

// STYLING
const titleBarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: 'hidden',
  textOverflow: "ellipsis",
  display: "flex",
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',

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
  width: "100%",
  maxHeight: "675px",
  backgroundColor: "transparent",
  position: "relative",
  flexBasis: "calc(50% + -5px)",
  padding: "0 0 0 0",
  height: '250px',
  marginBottom: '8px',
  boxShadow: '0px 0 6px -1px rgb(0 0 0 / 20%)'
};

const fabStyleEdit = {
  scale: "65%",
  position: "absolute",
  top: 0,
  right: 0,
    backgroundColor: '#386270', 
    '&:hover': { backgroundColor: '#527885',}
};

const fabStyleDelete = {
  scale: "65%",
  position: "absolute",
  top: 35,
  right: 0,
  backgroundColor: '#d15959', 
  '&:hover': { backgroundColor: '#df2626',}
};


// JOURNAL PREVIEW CARD
export default function JournalPreviewCard({ journalItem }) {
  const history = useHistory();
  const dispatch = useDispatch();
  // ~all objects within journalItem
  const {
    journalId,
    journalTitle,
    journalBody,
    createdDate,
    editedDate,
    questionText,
    categoryName,
  } = journalItem;

  // date formatting
  const formattedCreatedDate = new Date(createdDate).toLocaleDateString(
    "en-us",
    { year: "numeric", month: "short", day: "numeric" }
  );
  const formattedEditedDate = new Date(editedDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // set's active journal, moves to edit page
  const openJournalEditor = () => {
    dispatch({
      type: "SET_ACTIVE_JOURNAL",
      payload: journalItem,
    });
    history.push("/edit-journal");
  };

  // TODO - open to preview modal

  const handleDelete = () => {
    dispatch({
      type: "DELETE_JOURNAL",
      payload: journalId,
    });
  };


  // QuestionCard Modal control
  const [open, setOpen] = useState(false);
  const openJournalPreview = () => {
    setOpen(true);
    dispatch({
      type: "SET_ACTIVE_JOURNAL",
      payload: journalItem,
    });
  };
  const closeJournalPreview = () => {
    setOpen(false);
    dispatch({
      type: "CLEAR_ACTIVE_JOURNAL",
    });
  };


  return (
    <Box xs={6} sx={journalCardContainerStyle}>
      <Card variant="outlined" sx={{height: '100%'}}>
        {/* TODO - Opens journal editor */}

        <Fab
          color="primary"
          aria-label="edit"
          size="small"
          sx={fabStyleEdit}
          onClick={openJournalEditor}
        >
          <EditIcon />
        </Fab>
        <Fab
          color="primary"
          aria-label="edit"
          size="small"
          sx={fabStyleDelete}
          onClick={handleDelete}
        >
          <Delete />
        </Fab>

        {/* TODO - action area opens to modal view */}
        <CardActionArea onClick={openJournalPreview} sx={{height: '100%', backgroundColor: '#fdf9f8'}}>
          <CardContent sx={{ 
            padding: "2px 8px", 
            height: '100%', 
            WebkitMaskImage: 'linear-gradient(180deg, #000 85%, transparent)'
          }}>
            <Box sx={titleBarStyle}>
              <Typography variant="h5" component="div">
                {journalTitle}
              </Typography>
              <Box sx={{width: '20%', height: '10px'}}>

              </Box>
            </Box>
            <Box component="span" sx={subTitleStyle}>
              {/* <Typography sx={{ m: "-8px 0 10px 7px" }} color="text.secondary">
                {categoryName}
              </Typography> */}
              <Typography sx={{ m: "-6px 0 10px 7px", fontSize: '14px' }} color="text.secondary">
                {formattedCreatedDate}
              </Typography>
            </Box>
            <Typography variant="body2">{journalBody}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        sx={{ backdropFilter: "blur(8px)" }}
        open={open}
        onClose={closeJournalPreview}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <JournalViewModal 
          journalItem={journalItem}
          closeJournalPreview={closeJournalPreview}
        />
      </Modal>
    </Box>
  );
}
