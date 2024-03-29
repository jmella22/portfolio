//React
import React, { useState } from "react";

//Next

//Other library

//Material UI
import { Box, Button, CardMedia, Grid, Link, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

//Personal
import { HomeLayout } from "../components/layouts/HomeLayout";
import { LoadingScreem } from "../components/ui/LoadingScreem";

const AboutPage = ({ layout, page, utils }) => {
  const { title, description } = page.body;

  return (
    <HomeLayout
      title={page.title}
      description={page.description}
      layout={layout}
      utils={utils}
    >
      <Box
        mt={10}
        sx={{
          minHeight: "calc(100vh - 136px)",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h1"
          color={"secondary"}
          fontSize={"5vw"}
          mb={2}
        >
          {title}
        </Typography>
        <Grid container spacing={5} my={5}>
          <Grid
            item
            xs={12}
            md={8}
            display="flex"
            flexDirection={"column"}
            justifyContent="space-around"
          >
            <Box>
              {description.map((d, i) => (
                <div key={i}>
                  <Typography fontSize={{ md: "2vw" }}>{d}</Typography>
                  <br />
                </div>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/archivos/cv/CV-Jose-Mella-2022.pdf" download={true}>
                <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  endIcon={<FileDownloadOutlinedIcon />}
                  sx={{ marginY: 2 }}
                >
                  {utils.cv}
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardMedia
              component={"img"}
              image={"/imgs/about/myself.jpg"}
              alt={"Jose Mella"}
            />
          </Grid>
        </Grid>
      </Box>
    </HomeLayout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async ({ locale }) => {
  const { layouts, pages, utils } = await import(`../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      layout: layouts.homeLayout,
      page: pages.about,
      utils,
    },
  };
};
export default AboutPage;
