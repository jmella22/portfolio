//React
import React from "react";

//Next

//Other library

//Material UI
import { Avatar, Box, Typography } from "@mui/material";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";

//Personal
import { HomeLayout } from "../components/layouts/HomeLayout";

const Custom404page = ({ layout, page, utils }) => {
  const { title } = page.body;

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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography className="resalt" sx={{ fontSize: "8vw" }}>
          Ups!
        </Typography>
        <Typography
          variant="h1"
          color={"primary"}
          mb={5}
          mt={5}
          sx={{ fontSize: "6vw" }}
        >
          {title}
        </Typography>
        <Avatar sx={{ bgcolor: "transparent", width: 120, height: 120 }}>
          <SentimentDissatisfiedOutlinedIcon
            color="secondary"
            sx={{ fontSize: 120 }}
          />
        </Avatar>
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
      page: pages.nofound,
      utils,
    },
  };
};

export default Custom404page;
