import React from "react";
import "./Nav.css";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

// CUSTOM COMPONENTS
import LogOutButton from "../LogOutButton/LogOutButton";

// MUI
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
} from "@mui/material";



function Nav() {
  const history = useHistory();
  const user = useSelector(store => store.user);

  return (
    <>
      <AppBar position="static" sx={{mb: '60px', bgcolor: '#386270'}}>
        <Container maxWidth='false'>
          <Toolbar disableGutters>
            <Box
              sx={{
                height: "65px",
                display: "flex",
                justifyContent: "flex-start",
                alignContent: "center",
                flexDirection: "row",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push("/home");
              }}
            >
              <img
                src="images/scaled-cropped-horizontal-great-question-logos_white.png"
                alt="The logo"
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={() => {
                  history.push("/home");
                }}
                sx={{ my: 2, color: "white" }}
              >
                Home
              </Button>

              {!user.id && (
                <>
                  <Button
                    sx={{ my: 2, color: "white", whiteSpace: "nowrap" }}
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    Login / Register
                  </Button>
                </>
              )}

              {user.id && (
                <>
                  <Button
                    onClick={() => {
                      history.push("/user-profile");
                    }}
                    sx={{ my: 2, color: "white" }}
                  >
                    Profile
                  </Button>
                  <LogOutButton />
                </>
              )}

              <Button
                onClick={() => {
                  history.push("/about");
                }}
                sx={{ my: 2, color: "white" }}
              >
                About
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Nav;
