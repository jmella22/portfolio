import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.css";
import ME from "../assets/photo1654112623-removebg.png";

const About = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <div className={styles.container3}>
          <p className={styles.about}>About</p>
          <h2 className={styles.who}>Who I Am</h2>
          <p className={styles.txt}>I'm not your normal developer</p>
          <p className={styles.txt}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nemo
            dolorum beatae sapiente quia! Enim exercitationem quisquam dolores
            mollitia, officiis amet excepturi saepe tempore nisi velit dolore
            quod modi veniam.
          </p>
          <p className={styles.txt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            error tempora velit, eos nisi laborum, distinctio quae dolor
            praesentium corrupti quaerat odit, iure alias culpa adipisci ex
            repellat? Amet, assumenda.
          </p>
          <p className={styles.txt2}>Check out some of my latest projects</p>
        </div>
        <div className={styles.container_img}>
          <Image src={ME} alt="image of jose mella" />
        </div>
      </div>
    </div>
  );
};

export default About;
