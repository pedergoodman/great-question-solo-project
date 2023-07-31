import React, { useState } from "react";
import { useHistory } from "react-router-dom";


// MUI COMPONENTS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// CUSTOM COMPONENTS

function CategoryCard({ category }) {
  const history = useHistory();

  const bubbleContainerStyling = {
    width: "150px",
    height: "150px",
    borderRadius: "100%",
    background: "chocolate",
    m: '10px'
  };


  return (
    <>
      <Card sx={bubbleContainerStyling}>
        <CardActionArea sx={{ height: "100%" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              sx={{ textAlign: "center", m: 0 }}
            >
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CategoryCard;
