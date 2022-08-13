//React
import React from "react";

//Next

//Other library

//Material UI
import { Avatar, Box, CardMedia, Grid, Typography } from "@mui/material";

//Personal
import { HomeLayout } from "../components/layouts/HomeLayout";

const AboutPage = ({ title, menu, footer, about }) => {
  return (
    <HomeLayout title={title} menu={menu} footer={footer}>
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
          {about.title}
        </Typography>
        <Grid container spacing={5} my={5}>
          <Grid item xs={12} md={8}>
            <Typography>
              Hola, Soy Jose un desarrollador web Full-Stack del pais de Chile
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <CardMedia
              component={"img"}
              image={"/Images/about/myself.jpg"}
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
  const response = await import(`../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      title: response.about.titlePage,
      menu: response.menu,
      footer: response.footer,
      about: response.about,
    },
  };
};
export default AboutPage;
