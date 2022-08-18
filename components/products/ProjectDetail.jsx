//React
import React, { useContext } from "react";

//Next

//Other Library

//Material Ui
import {
  AppBar,
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Fab,
  Grid,
  IconButton,
  Link,
  Modal,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { MdOutlineAdsClick } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

//Personal
import { UiContext } from "../../contexts";

export const ProjectDetail = ({ isOpen, handleClose, project, utils }) => {
  const {
    title,
    descriptionFull,
    isOnline,
    repository,
    technologies,
    links,
    images,
  } = project;

  const { colorMode } = useContext(UiContext);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        backdropFilter: "blur(10px)",
        transition: "all 0.5s ease-out",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          backgroundColor: `${
            colorMode === "light" ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)"
          }`,
          border: "2px solid #5bc0be",
          borderRadius: 5,
          p: 2,
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 5,
            mb: 2,
          }}
        >
          <Typography fontSize={"5vw"} color="secondary" fontWeight={600}>
            {title}
          </Typography>
          <Tooltip
            onClick={handleClose}
            size="large"
            title={utils.close}
            placement="left"
            sx={{ cursor: "pointer" }}
          >
            <CloseOutlinedIcon fontSize="large" color="error" />
          </Tooltip>
        </Box>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "center",
            alignContent: "center",
            mb: 2,
          }}
        >
          <Link href={links.webSite} target={"_blank"} rel="noopener">
            <Button
              variant="outlined"
              className={"linkedin"}
              startIcon={<MdOutlineAdsClick />}
            >
              {utils.site}
            </Button>
          </Link>
          <Link href={links.repository} target={"_blank"} rel="noopener">
            <Button
              variant="outlined"
              className={"github"}
              startIcon={<FaGithub />}
            >
              {utils.repository}
            </Button>
          </Link>
        </Stack>

        <Typography fontWeight={600} fontSize="large" mb={2}>
          {utils.technologies}
        </Typography>
        <Box
          sx={{
            // backgroundColor: {
            //   xs: "red",
            //   sm: "blue",
            //   md: "olive",
            //   lg: "orange",
            // },
            width: "100%",
            mb: 2,
          }}
        >
          <Grid container spacing={2} padding={2} justifyContent="Center">
            {technologies.map((t, i) => (
              <Grid item xs={4} md={3} lg={2} key={i}>
                <Chip
                  label={t}
                  color="secondary"
                  sx={{ width: "auto" }}
                  variant="outlined"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography fontWeight={600} fontSize="large" mb={2}>
          {utils.description}
        </Typography>
        <Box mb={2} sx={{ width: "100%" }}>
          {project.descriptionFull.map((d, i) => (
            <Box key={i} sx={{ width: "90%", margin: "auto" }}>
              <Typography>{d}</Typography>
            </Box>
          ))}
        </Box>
        <Typography fontWeight={600} fontSize="large" mb={2}>
          {utils.images}
        </Typography>
        <Box mb={2} sx={{ width: "100%" }}>
          <Grid Container spacing={1}>
            {project.images.map((m, i) => (
              <Grid item xs={12} key={i}>
                <Card sx={{ margin: 1, padding: 1 }}>
                  <CardMedia
                    mb={1}
                    width={"90%"}
                    component={"img"}
                    image={`/imgs/projectsimg/${m}`}
                    alt="hola"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};
