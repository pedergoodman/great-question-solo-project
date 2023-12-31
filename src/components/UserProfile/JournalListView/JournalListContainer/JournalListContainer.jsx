import * as React from "react";
import { useSelector } from "react-redux";
import "./JournalListContainer.css";

// MUI COMPONENTS
import { Divider, Grid, Typography } from "@mui/material";

// MUI ICONS
import JournalListPreviewCard from "../JournalListPreviewCard/JournalListPreviewCard";

// STYLING
const gridStyling = {
  width: "100%",
  margin: "0 0 0 0",
  maxHeight: "100%",
  bgcolor: "background.paper",
  position: "relative",
  overflow: "scroll",
  backgroundColor: "transparent",
  flexBasis: "calc(50% + -4px)",
  WebkitFlexBasis: "calc(50% - 4px)",
  justifyContent: "space-between",
  "& ul": { padding: 0 },
  "& .css-10kwm8m-MuiGrid-root": { WebkitFlexBasis: "calc(50% - 4px)" },
};

// JOURNAL CONTAINER
export default function JournalContainer() {
  const { userJournals } = useSelector(store => store.journals);

  console.log("userJournals is:", userJournals);

  return (
    <>
      <Typography variant="h6" sx={{ padding: "4px 10px", fontWeight: "800" }}>
        Your Journals
      </Typography>
      <Divider sx={{ mb: "5px" }} />
      <Grid container spacing={1} rowSpacing={2} sx={gridStyling}>
        {userJournals.map(journalItem => (
          <JournalListPreviewCard
            key={journalItem.journalId}
            journalItem={journalItem}
          />
        ))}
      </Grid>
    </>
  );
}
