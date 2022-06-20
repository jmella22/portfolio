import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <div>
          <p className={styles.txt_main}>Let's build something Together</p>
          <h1 className={styles.container_name1}>
            Hi, I'm <span className={styles.name}>Jose</span>
          </h1>
          <h1 className={styles.container_name2}>A Full-Stack Web Developer</h1>
          <p className={styles.container_description_small}>
            I'm a Full-Stack Web Devepoler specializing in building exceptional
            digital experiences based on functionalities as well as design.
            Currently, I'm learning new skill to improve my professional
            profile.
          </p>
          <div className={styles.container_link_connect}>
            <div className={styles.link_connect}>
              <FaLinkedinIn />
            </div>
            <div className={styles.link_connect}>
              <FaGithub />
            </div>
            <div className={styles.link_connect}>
              <AiOutlineMail />
            </div>
            <div className={styles.link_connect}>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
