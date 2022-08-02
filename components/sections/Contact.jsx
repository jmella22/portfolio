//React
import React from "react";
//Next

//Other Library
import { useForm } from "react-hook-form";

//Material Ui
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { isValidEmail } from "../../utils";

//Other

export const Contact = ({ contact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSendMail = ({ name, email, subject, message }) => {
    // console.log(name, email, subject, message);
  };

  const isEmail = (email) => {
    return isValidEmail(email) ? undefined : contact.error.email[1];
  };

  return (
    <Box my={4} sx={{ textAlign: "center" }}>
      <Typography variant="h1" color={"secondary"} fontSize={"4vw"} mb={2}>
        {contact.title}
      </Typography>
      <form onSubmit={handleSubmit(onSendMail)} noValidate>
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
                label={contact.form.name}
                type={"text"}
                variant="outlined"
                fullWidth
                {...register("name", {
                  required: contact.error.name[0],
                  minLength: {
                    value: 2,
                    message: contact.error.name[1],
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={contact.form.email}
                variant="outlined"
                type={"email"}
                fullWidth
                {...register("email", {
                  required: contact.error.email[0],
                  validate: isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={contact.form.subject}
                variant="outlined"
                type={"text"}
                fullWidth
                {...register("subject", {
                  required: contact.error.subject[0],
                  minLength: {
                    value: 2,
                    message: contact.error.subject[1],
                  },
                })}
                error={!!errors.subject}
                helperText={errors.subject?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={contact.form.message}
                variant="outlined"
                type={"text"}
                fullWidth
                multiline
                {...register("message", {
                  required: contact.error.message[0],
                  minLength: {
                    value: 2,
                    message: contact.error.message[1],
                  },
                })}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 5 }} display="flex" justifyContent={"center"}>
          <Button
            variant="outlined"
            type="submit"
            color="secondary"
            size="large"
          >
            {contact.submit}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
