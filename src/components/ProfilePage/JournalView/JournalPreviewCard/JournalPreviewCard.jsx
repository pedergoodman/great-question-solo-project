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

const card = (
  <>
    {/* TODO - Opens journal editor */}
    <Fab color="primary" aria-label="edit" size="small" sx={fabStyle}>
      <EditIcon />
    </Fab>

    {/* TODO - action area opens to modal view */}
    <CardActionArea>
      <CardContent sx={{ padding: "2px 8px 12px" }}>
        <Box sx={titleBarStyle}>
          <Typography variant="h5" component="div">
            Title Goes Here
          </Typography>
        </Box>
        <Box component="span" sx={subTitleStyle}>
          <Typography sx={{ m: "-8px 0 10px 7px" }} color="text.secondary">
            category
          </Typography>
          <Typography sx={{ m: "-8px 0 10px 7px" }} color="text.secondary">
            8.23.23
          </Typography>
        </Box>
        <Typography variant="body2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </CardContent>
    </CardActionArea>
  </>
);

export default function JournalPreviewCard() {
  return (
    <Box xs={6} sx={journalCardContainerStyle}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
