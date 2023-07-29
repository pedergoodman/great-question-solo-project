import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import CategoryCard from "../CategoryCard/CategoryCard";

// CUSTOM COMPONENTS
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function LandingPage() {
  const [heading, setHeading] = useState("Select a Category!");
  const history = useHistory();

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

  return (
    <div className="container">
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{ textAlign: "center" }}
      >
        {heading}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {categories.map(category => (
          <CategoryCard category={category} />
        ))}
      </Box>
    </div>
  );
}

export default LandingPage;
