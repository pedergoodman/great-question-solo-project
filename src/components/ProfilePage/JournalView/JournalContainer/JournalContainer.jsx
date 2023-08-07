import * as React from "react";
import "./JournalContainer.css";

import Box from "@mui/material/Box";

import JournalPreviewCard from "../JournalPreviewCard/JournalPreviewCard";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

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

export default function JournalContainer() {
  const { userJournals } = useSelector(store => store.journals);

  console.log("userJournals is:", userJournals);

  return (
    <>
      <Grid container spacing={1} rowSpacing={2} sx={gridStyling}>
        {userJournals.map(journalItem => (
          <JournalPreviewCard
            key={journalItem.journalId}
            journalItem={journalItem}
          />
        ))}
      </Grid>
    </>
  );
}
