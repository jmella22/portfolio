//React
import React from "react";

//Next

//Other Library
import Cookies from "js-cookie";
//Material Ui
import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

//Other
export const Hero = ({ hero }) => {
  console.log("hero", Cookies.get("theme"));
  return (
    <Grid
      container
      spacing={3}
      // direction={"column"}
      justifyContent={"center"}
      alignItems="center"
      height={"100vh"}
      id="home"
    >
      <Grid item xs={12} textAlign="center">
        <Typography
          variant="h1"
          color={"primary"}
          mb={2}
          mt={10}
          sx={{ fontSize: "6vw" }}
        >
          {`${hero.title1} `}
          <span className="resalt" style={{ fontSize: "8vw" }}>
            Jose
          </span>
        </Typography>
        <Typography
          variant="h1"
          component={"h1"}
          color={"primary"}
          mb={5}
          sx={{ fontSize: "6vw" }}
        >
          {hero.title2}
        </Typography>
        <Typography
          variant="subtitle1"
          color={"secondary"}
          sx={{ fontSize: "3vw", fontStyle: "italic" }}
        >
          {hero.subtitle}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ alignItems: "center" }} mb={"auto"}>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Link
            href="https://www.linkedin.com/in/josemellar/"
            target={"_blank"}
            rel="noopener"
          >
            <Button
              variant="outlined"
              className={"linkedin"}
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
            <Button
              variant="outlined"
              className={"github"}
              startIcon={<FaGithub />}
            >
              GitHub
            </Button>
          </Link>
          <Link
            href="https://twitter.com/jose_mella_r"
            target={"_blank"}
            rel="noopener"
          >
            <Button
              variant="outlined"
              className="twitter"
              startIcon={<FaTwitter />}
            >
              Twitter
            </Button>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};
