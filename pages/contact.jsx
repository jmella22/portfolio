//React
import React from "react";

//Next

//Other Library

//Material Ui
import { Box } from "@mui/material";

//Personal
import { HomeLayout } from "../components/layouts";
import { Contact } from "../components/sections";

const ContactPage = ({ title, menu, contact, footer }) => {
  return (
    <HomeLayout title={title} menu={menu} footer={footer}>
      <Box
        sx={{
          height: "calc(100vh - 56px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Contact contact={contact} />
      </Box>
    </HomeLayout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const response = await import(`../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      title: response.contact.titlePage,
      menu: response.menu,
      contact: response.contact,
      footer: response.footer,
    },
  };
};
export default ContactPage;
