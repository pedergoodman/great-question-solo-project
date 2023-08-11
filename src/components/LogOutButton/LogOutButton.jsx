import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';


function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <Button
    sx={{ my: 2, color: "white", whiteSpace: 'nowrap' }}
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
