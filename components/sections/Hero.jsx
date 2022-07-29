//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

//Other
export const Hero = ({ hero }) => {
  return (
    <Grid
      container
      spacing={3}
      // direction={"column"}
      justifyContent={"center"}
      alignItems="center"
      height={"100vh"}
      id="home"
      sx={{ backgroundColor: "red" }}
    >
      <Grid item xs={12} textAlign="center">
        <Typography variant="subtitle1" color={"primary"} mb={5}>
          {hero.subtitle}
        </Typography>
        <Typography variant="h1" color={"primary"} mb={2}>
          {`${hero.title1} `}
          <span className="resalt">Jose</span>
        </Typography>
        <Typography variant="h1" component={"h1"} color={"primary"}>
          {hero.title2}
        </Typography>
      </Grid>
      {/* <Grid
        item
        xs={12}
        sm={10}
        md={8}
        // lg={6}
        textAlign="center"
        // mb={"auto"}
        mt={2}
      >
        <Typography>{hero.body}</Typography>
      </Grid> */}
      <Grid item xs={12} sx={{ alignItems: "center" }} mb={"auto"}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", backgroundColor: "blue" }}
        >
          <Link
            href="https://www.linkedin.com/in/josemellar/"
            target={"_blank"}
            rel="noopener"
          >
            <Button
              variant="contained"
              color="secondary"
              startIcon={<FaLinkedinIn />}
            >
              LinkedIn
            </Button>
          </Link>
          <Link
            href="https://github.com/jmella22"
            target={"_blank"}
            rel="noopener"
          >
            <Button variant="outlined" startIcon={<FaGithub />}>
              GitHub
            </Button>
          </Link>
          <Link
            href="https://github.com/jmella22"
            target={"_blank"}
            rel="noopener"
          >
            <Button variant="outlined" startIcon={<FaTwitter />}>
              GitHub
            </Button>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};
