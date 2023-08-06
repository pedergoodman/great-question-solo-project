import * as React from "react";
import './JournalContainer.css'

import Box from "@mui/material/Box";

import JournalPreviewCard from "../JournalPreviewCard/JournalPreviewCard";
import { Grid } from "@mui/material";

export default function FavoritesContainer() {
  return (
    <>
      <Grid container spacing={1} rowSpacing={1}
        sx={{
          width: "100%",
          margin: '0 0 0 0',
          maxHeight: "575px",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "675px",
          backgroundColor: 'transparent',
          flexBasis: 'calc(50% + -5px)',
          WebkitFlexBasis: 'calc(50% - 4px)',
          justifyContent: 'space-between',
          
          "& ul": { padding: 0 },
          "& .css-10kwm8m-MuiGrid-root": { WebkitFlexBasis: 'calc(50% - 4px)', },
        }}

      >
        <JournalPreviewCard />
        <JournalPreviewCard />
        <JournalPreviewCard />
        <JournalPreviewCard />
        <JournalPreviewCard />
      </Grid>
    </>
  );
}

{
  /* <Box
sx={{
  width: 300,
  height: 300,
  backgroundColor: 'primary.dark',
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
}}
/> */
}
