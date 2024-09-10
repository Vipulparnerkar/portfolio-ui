import React from "react";
import "./Home.css";
import { Button, Link } from "@mui/material";
const Home = () => {
  return (
    <div>
      <div className="parent-home">
        <div className="home-info">
          <p>Hello!</p>
          <h4>
            I'm Vipul <br />
            Parnerkar
          </h4>
          <h2>Full Stack Developer</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button className="btn-resume" variant="contained" size="small">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                href="#resume"
              >
                Resume
              </Link>
            </Button>
            &nbsp; &nbsp;
            <Button className="btn-skills" variant="outlined" size="small">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="#skills"
              >
                Skills
              </Link>
            </Button>
          </div>
        </div>
        {/* Photo */}
        <div>
          <img src="/image.png" alt="" width={550} height={550} />
        </div>
      </div>
    </div>
  );
};

export default Home;
