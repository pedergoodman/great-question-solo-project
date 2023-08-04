import * as React from "react";
import Box from "@mui/material/Box";

import JournalPreviewCard from "../JournalPreviewCard/JournalPreviewCard";

export default function FavoritesContainer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxHeight: "575px",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "675px",
          backgroundColor: 'transparent',
          "& ul": { padding: 0 },
        }}
      >
        <JournalPreviewCard />
        <JournalPreviewCard />
        <JournalPreviewCard />
        <JournalPreviewCard />
        <JournalPreviewCard />
      </Box>
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
