import React from "react";
import Popover from '@mui/material/Popover';
import { Typography } from "@mui/material";

export default function PleaseLogInPopover({ anchorEl }) {
  const open = Boolean(anchorEl);

  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      // onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Typography sx={{ p: 1 }}>Please log-in to use this.</Typography>
    </Popover>
  );
}
