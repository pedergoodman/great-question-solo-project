import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// MUI COMPONENTS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { createQuestionList } from "../../utils/utils";
import Modal from "@mui/material/Modal";

// CUSTOM COMPONENTS
import QuestionCard from "../QuestionCard/QuestionCard";

// CategoryCard function
//
function CategoryCard({ questionCategory, color }) {
  const categoryName = questionCategory.categoryData.categoryName;

  // console.log(color);
  const arrayOfColors = [
    // blues
    "#64acc4",
    "#669fb2",
    "#89c0d2",

    // sandy
    "#bc8b7b",
    "#d1afa3",

    // greens
    "#93bd9e",
    "#adcdb5",

    // purples
    "#d5c3da",
    "#c1cdf0",

    // reds
    "#e3a28c",
    // red-orange maybe delete
    "#e0b080",
    "#e8caf2",
  ];

  const randomIndex = Math.floor(Math.random() * arrayOfColors.length);

  // CategoryBubble styling
  const bubbleContainerStyling = {
    width: "200px",
    height: "200px",
    borderRadius: "100%",
    background: arrayOfColors[randomIndex],
    m: "10px",
  };
  // console.log('in CategoryCard: questionCategory is:', questionCategory);

  const categoryList = createQuestionList([questionCategory]);

  // QuestionCard Modal control
  const [open, setOpen] = useState(false);
  const handleOpenCategory = () => {
    setOpen(true);
  };
  const handleCloseCategory = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={bubbleContainerStyling}>
        <CardActionArea sx={{ height: "100%" }} onClick={handleOpenCategory}>
          <CardContent>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              sx={{
                textAlign: "center",
                m: 0,
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              {categoryName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        sx={{ backdropFilter: "blur(8px)" }}
        open={open}
        onClose={handleCloseCategory}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <QuestionCard
          handleCloseCategory={handleCloseCategory}
          categoryList={categoryList}
        />
      </Modal>
    </>
  );
}

export default CategoryCard;
