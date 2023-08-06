import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// MUI COMPONENTS
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Box, Collapse, IconButton, Typography } from "@mui/material";

// MUI ICONS
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ChevronRight } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function JournalContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const [fav, setFav] = useState(false);

  // need to replace this with favories but the full list is nice so i have more data to view
  const questionsList = useSelector(store => store.questions);
  console.log("in profile questionsList is:", questionsList);

  const handleClick = () => {
    setOpen(!open);
  };

  // grabs question data and fill bubbles!
  useEffect(() => {
    dispatch({
      type: "FETCH_QUESTIONS",
    });
  }, []);

  const startJournal = () => {
    console.log("clicked start journal!");
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "675px",
        paddingBottom: 0,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {/* maping the header */}
      {[0, 1, 2, 3, 4, 5].map(sectionId => (
        <li key={`section-${sectionId}`}>
          
          
          <ul>
            <ListSubheader sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                onClick={handleClick}
              >
                {open ? <ExpandMore /> : <ChevronRight />}
              </IconButton>
              <Typography>{`I'm sticky ${sectionId}`}</Typography>
            </ListSubheader>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {/* maping the sub headers as unordered list */}
              {[0, 1, 2, 3, 4].map(item => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                  <IconButton
                    aria-label="fingerprint"
                    color="secondary"
                    onClick={() => setFav(!fav)}
                  >
                    {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                  <IconButton
                    aria-label="fingerprint"
                    color="secondary"
                    onClick={startJournal}
                  >
                    <MenuBookIcon />
                  </IconButton>
                </ListItem>
              ))}
            </Collapse>
          </ul>

          
        </li>
      ))}
    </List>
  );
}
