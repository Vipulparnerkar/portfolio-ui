import { Grid2, Rating, Typography } from "@mui/material";
import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>My Skills</h1>
      <div className="skills-p">
        <Grid2 container spacing={0} >
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">React JS</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">Angular JS</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">Node JS</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">Express JS</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={0}>
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">JavaScript</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">TypeScript</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">Git/Github</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">Material UI</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 6 }}>
            <div>
              <Typography component="legend">CI/CD</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 6}}>
            <div>
              <Typography component="legend">HTML/CSS</Typography>
              <Rating name="read-only" value={5} readOnly />
            </div>
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
};

export default Skills;
