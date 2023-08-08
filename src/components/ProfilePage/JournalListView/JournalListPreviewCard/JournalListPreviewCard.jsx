import * as React from "react";

// MUI COMPONENTS
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Fab } from "@mui/material";

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
  width: "100%",
  maxHeight: "675px",
  backgroundColor: "transparent",
  position: "relative",
  overflowY: "scroll",
  flexBasis: "calc(50% + -5px)",
  padding: "0 0 0 0",
};

const fabStyle = {
  scale: "65%",
  position: "absolute",
  top: 0,
  right: 0,
};


export default function JournalPreviewCard({ journalItem }) {
  // ~all objects within journalItem
  const {
    journalId,
    journalTitle,
    journalBody,
    createdDate,
    editedDate,
    questionText,
    categoryName
  } = journalItem;

  // date formatting
  const formattedCreatedDate = new Date(createdDate).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"});
  const formattedEditedDate = new Date(editedDate).toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"});

  const openJournalEditor = () => {
    console.log('clicked openJournalEditor');
  }
  
  const openJournalPreview = () => {
    console.log('clicked openJournalPreview');
  }

  return (
    <Box xs={6} sx={journalCardContainerStyle}>
      <Card variant="outlined">
        {/* TODO - Opens journal editor */}
        <Fab 
          color="primary" 
          aria-label="edit" 
          size="small" 
          sx={fabStyle}
          onClick={openJournalEditor}
        >
          <EditIcon />
        </Fab>

        {/* TODO - action area opens to modal view */}
        <CardActionArea
          onClick={openJournalPreview}
        >
          <CardContent sx={{ padding: "2px 8px 12px" }}>
            <Box sx={titleBarStyle}>
              <Typography variant="h5" component="div">
                {journalTitle}
              </Typography>
            </Box>
            <Box component="span" sx={subTitleStyle}>
              {/* <Typography sx={{ m: "-8px 0 10px 7px" }} color="text.secondary">
                {categoryName}
              </Typography> */}
              <Typography sx={{ m: "-8px 0 10px 7px" }} color="text.secondary">
                {formattedCreatedDate}
              </Typography>
            </Box>
            <Typography variant="body2">
              {journalBody}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
