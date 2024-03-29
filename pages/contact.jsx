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
import { isValidEmail } from "../utils";
import { UiContext } from "../contexts";

const ContactPage = ({ layout, page, utils }) => {
  const { title, formC } = page.body;
  const formError = utils.errors.form;

  const { colorMode } = useContext(UiContext);
  const [isSend, setIsSend] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const form = useRef();

  const onSendMail = ({ name, email, subject, message }) => {
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          reset();
          setIsSend(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleClose = () => {
    router.replace("/");
    setIsSend(false);
  };

  const isEmail = (email) => {
    return isValidEmail(email) ? undefined : formError.email[1];
  };

  return (
    <HomeLayout
      title={page.title}
      description={page.description}
      layout={layout}
      utils={utils}
    >
      <Box mt={10} sx={{ minHeight: "calc(100vh - 136px)" }}>
        <Typography
          textAlign={"center"}
          variant="h1"
          color={"secondary"}
          fontSize={"5vw"}
          mb={2}
        >
          {title}
        </Typography>
        <form onSubmit={handleSubmit(onSendMail)} noValidate ref={form}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              width: { xs: "100%", sm: "80%", md: "60%" },
            }}
          >
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label={formC.name}
                  name="name"
                  type={"text"}
                  variant="outlined"
                  fullWidth
                  {...register("name", {
                    required: formError.name[0],
                    minLength: {
                      value: 2,
                      message: formError.name[1],
                    },
                  })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label={formC.email}
                  name="email"
                  variant="outlined"
                  type={"email"}
                  fullWidth
                  {...register("email", {
                    required: formError.email[0],
                    validate: isEmail,
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={formC.subject}
                  name="subject"
                  variant="outlined"
                  type={"text"}
                  fullWidth
                  {...register("subject", {
                    required: formError.subject[0],
                    minLength: {
                      value: 2,
                      message: formError.subject[1],
                    },
                  })}
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label={formC.message}
                  name="message"
                  variant="outlined"
                  type={"text"}
                  fullWidth
                  multiline
                  {...register("message", {
                    required: formError.message[0],
                    minLength: {
                      value: 2,
                      message: formError.message[1],
                    },
                  })}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 5, mb: 5 }} display="flex" justifyContent={"center"}>
            <Button
              variant="outlined"
              type="submit"
              color="secondary"
              size="large"
            >
              {utils.submit}
            </Button>
          </Box>
        </form>
        <Modal
          open={isSend}
          onClose={handleClose}
          sx={{ backdropFilter: "blur(8px)", transition: "all 0.5s ease-out" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: `${
                colorMode === "light" ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"
              }`,
              border: "3px solid #5bc0be",
              borderRadius: 5,
              p: 2,
              width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h4" component="h2" mb={4}>
              {utils.modal}
            </Typography>
            <Avatar sx={{ bgcolor: "transparent", width: 120, height: 120 }}>
              <CheckCircleOutlinedIcon
                color="secondary"
                sx={{ fontSize: 120 }}
              />
            </Avatar>
          </Box>
        </Modal>
      </Box>
    </HomeLayout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const { layouts, pages, utils } = await import(`../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      layout: layouts.homeLayout,
      page: pages.contact,
      utils,
    },
  };
};
export default ContactPage;
