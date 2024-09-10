import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Header.css"
import { Link } from "@mui/material";

const Header = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="sticky"
          variant="outlined"
          color="transparent"
          style={{ marginLeft: "", marginRight: "", padding: "5px" }}
        >
          <Toolbar style={{ marginRight: "" }}>
            <Typography
              variant="h5"
              component="div"
              fontWeight={700}
              sx={{ flexGrow: 1 }}
              className="header-buttons"
            >
              Vipul Parnerkar
            </Typography>
            <Button className="header-buttons">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="#resume"
              >
                Resume
              </Link>
            </Button>

            <Button className="header-buttons">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="#skills"
              >
                Skills
              </Link>
            </Button>

            <Button className="header-buttons">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="#contact"
              >
                Contact
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
