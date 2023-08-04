import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function JournalContainer() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // TEMP ARRAY DATA

//   width: '100%',
// maxHeight: '675px',
// backgroundColor: '#fff',
// position: 'relative',
// overflow: 'auto'

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: '675px',
        paddingBottom: 0,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {/* maping the header */}
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader sx={{ display: "flex", alignItems: "center" }}>
              <Typography>{`I'm sticky ${sectionId}`}</Typography>
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                onClick={handleClick}
              >
                {open ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListSubheader>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {/* maping the sub headers as unordered list */}
              {[0, 1, 2].map(item => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </Collapse>
          </ul>
        </li>
      ))}
    </List>
  );
}