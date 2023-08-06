import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// MUI COMPONENTS
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { createQuestionList } from "../../utils/utils";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


// CUSTOM COMPONENTS
import QuestionCard from '../QuestionCard/QuestionCard'

function CategoryCard({ questionCategory }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const categoryName = questionCategory.categoryData.categoryName;
  const questionData = questionCategory.questionData;

  // CategoryBubble styling
  const bubbleContainerStyling = {
    width: "150px",
    height: "150px",
    borderRadius: "100%",
    background: "chocolate",
    m: "10px",
  };
  // console.log('in CategoryCard: questionCategory is:', questionCategory);

  const categoryList = createQuestionList([questionCategory]);
  const handleClickCategory = () => {

    console.log(`${categoryName} clicked! questions are:`, categoryList);
  };

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
              sx={{ textAlign: "center", m: 0 }}
            >
              {categoryName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open} 
        onClose={handleCloseCategory}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <QuestionCard handleCloseCategory={handleCloseCategory} categoryList={categoryList}/>
      </Modal>
    </>
  );
}

export default CategoryCard;
