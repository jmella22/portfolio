import React, { useContext, useRef, useState } from "react";

//Next
import { useRouter } from "next/router";

//Other Library
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

//Material Ui
import {
  Avatar,
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

//Personal
import { HomeLayout } from "../components/layouts";
import { UiContext } from "../contexts";
import { SkillsList } from "../components/skills";
const SkillsPage = ({ layout, page, utils }) => {
  const { title, description, skills } = page.body;

  return (
    <HomeLayout
      title={page.title}
      description={page.description}
      layout={layout}
      utils={utils}
    >
      <Box mt={10} mb={5} sx={{ minHeight: "calc(100vh - 136px)" }}>
        <Typography
          textAlign={"center"}
          variant="h1"
          color={"secondary"}
          fontSize={"5vw"}
          mb={2}
        >
          {title}
        </Typography>
        <Typography
          fontSize={{ md: "2vw" }}
          my={2}
          width={{ md: "90%" }}
          mb={5}
        >
          {description}
        </Typography>
        <SkillsList skills={skills} />
      </Box>
    </HomeLayout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const { layouts, pages, utils } = await import(`../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      layout: layouts.homeLayout,
      page: pages.skills,
      utils,
    },
  };
};

export default SkillsPage;
