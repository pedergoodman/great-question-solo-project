import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useDispatch, useSelector } from "react-redux";


// CUSTOM COMPONENTS
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";




function LandingPage() {
  const user = useSelector(store => store.user)
  const questionsList = useSelector(store => store.questions)
  const history = useHistory();
  const dispatch = useDispatch();


  // temp map data!
  const categories = [
    "Self-Discovery",
    "Philosophy",
    "Reflection",
    "Creativity",
    "Ethics",
    "Environment",
    "Relationships",
    "Aspirations",
    "Society",
  ];

  useEffect(() => {
    console.log('in USE EFFECT', user.id);
    dispatch({
      type: "FETCH_QUESTIONS"
    })
  }, [])


  return (
    <div className="container">
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ textAlign: "center" }}
      >
        Select a Category!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {categories.map((category, i) => (
          <CategoryCard key={i} category={category} />
        ))}
      </Box>
    </div>
  );
}

export default LandingPage;
