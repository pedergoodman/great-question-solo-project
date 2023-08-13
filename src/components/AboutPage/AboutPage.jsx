import { Box, Grid, Typography } from "@mui/material";
import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'
const technologiesUsed = [
  "JavaScript",
  "Redux",
  "React",
  "Material-UI",
  "PostgreSQL",
];

function AboutPage() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        boxSizing: "border-box",
        WebkitFlexDirection: "row",
        MsFlexDirection: "row",
        flexDirection: "row",
        display: "flex",
        mt: "130px",
        borderSpacing: "13px",
        justifyContent: "center",
        alignItems: 'center'
      }}
    >
      <Box sx={{ width: "45%", }}>
        <Box sx={{ height: "450px", width: '80%', m: 'auto' }}>
          <img src="images/about-page-logo.png" alt="great question logo" />
        </Box>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            fontFamily: "ui-monospace",
            fontSize: "1.4em",
            mt: '-40px'
          }}
        >
          Great Question is a helpful app that assists you in finding and
          exploring meaningful prompts to share with your peers or use as a
          journal prompt. You can choose from various categories or select a
          wildcard option. The app also provides a journaling feature, so you
          can use it as your personal journal.
        </Typography>
      </Box>

      <Box sx={{ width: "45%", }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            margin: "20px 0 10px",
            fontFamily: "ui-monospace",
          }}
        >
          Technologies Used
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            fontFamily: "ui-monospace",
            fontSize: "1.4em",
          }}
        >
          JavaScript, Redux, React, Material-UI, PostgreSQL
        </Typography>

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            margin: "20px 0 10px",
            fontFamily: "ui-monospace",
          }}
        >
          Next Steps
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", fontFamily: "ui-monospace", fontSize: "1.4em", mb: '10px' }}
        >
          Growing the library of questions in the app. 
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", fontFamily: "ui-monospace", fontSize: "1.4em", m: '10px' }}
        >
          A section dedicated to socratic method questions  
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", fontFamily: "ui-monospace", fontSize: "1.4em", m: '10px' }}
        >
          CSS animations to give the app more personality.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            margin: "20px 0 10px",
            fontFamily: "ui-monospace",
          }}
        >
          Thank You
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", fontFamily: "ui-monospace", fontSize: "1.4em", m: '10px' }}
        >
          Emma and all the Prime instructors & staff. 
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", fontFamily: "ui-monospace", fontSize: "1.4em", m: '10px' }}
        >
          Everyone in the Emerald cohort
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", fontFamily: "ui-monospace", fontSize: "1.4em", m: '10px' }}
        >
          Friends & Family
        </Typography>
      </Box>
    </Grid>
  );
}

export default AboutPage;
