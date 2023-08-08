import * as React from "react";
import { useSelector } from "react-redux";
import "./JournalListContainer.css";

// MUI COMPONENTS
import { Grid } from "@mui/material";

// MUI ICONS
import JournalListPreviewCard from "../JournalListPreviewCard/JournalListPreviewCard";

// STYLING
const gridStyling = {
  width: "100%",
  margin: "0 0 0 0",
  maxHeight: "575px",
  bgcolor: "background.paper",
  position: "relative",
  overflow: "auto",
  maxHeight: "675px",
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
