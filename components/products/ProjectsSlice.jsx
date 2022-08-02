//React
import React, { useContext, useState } from "react";

//Next

//Other Library
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
//Material Ui
import { Typography } from "@mui/material";

//Other
import style from "./ProductSlideshow.module.css";
import { UiContext } from "../../contexts";

export const ProjectsSlice = ({ projects }) => {
  const { colorMode } = useContext(UiContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Slide easing="ease" defaultIndex={7000} indicators>
      {projects.map((project, i) => {
        const url = `images/projects/${project.images[0]}`;
        return (
          <div
            key={i}
            className={style["each-slide"]}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            >
              {isHovered && (
                <div
                  className={style.content}
                  style={{
                    backgroundColor: `${
                      colorMode === "light"
                        ? "rgba(255,255,255,0.3)"
                        : "rgba(0,0,0,0.3)"
                    }`,
                  }}
                >
                  <Typography variant="h1">{project.title}</Typography>
                  {/* <Typography variant="h3">{project.description}</Typography> */}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </Slide>
  );
};