import Image from "next/image";
import React from "react";
import styles from "../styles/Skills.module.css";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import nodejs from "../assets/skills/nodejs.png";
import postgresql from "../assets/skills/posgresql.png";
import firebase from "../assets/skills/firebase.png";

const Skills = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <p className={styles.skills}>Skills</p>
        <h2 className={styles.what}>What I Can Do</h2>
        <div className={styles.container_skills}>
          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image src={react} alt="react" height={64} width={64} />
              </div>
              <div className={styles.skill_name}>
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image src={redux} alt="redux" height={64} width={64} />
              </div>
              <div className={styles.skill_name}>
                <h3>REDUX</h3>
              </div>
            </div>
          </div>
          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image src={nodejs} alt="nodejs" height={64} width={64} />
              </div>
              <div className={styles.skill_name}>
                <h3>NODEJS</h3>
              </div>
            </div>
          </div>
          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image
                  src={postgresql}
                  alt="postgresql"
                  height={64}
                  width={64}
                />
              </div>
              <div className={styles.skill_name}>
                <h3>POSTGRESQL</h3>
              </div>
            </div>
          </div>
          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image src={firebase} alt="firebase" height={64} width={64} />
              </div>
              <div className={styles.skill_name}>
                <h3>FIREBASE</h3>
              </div>
            </div>
          </div>
          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image src={nodejs} alt="nodejs" height={64} width={64} />
              </div>
              <div className={styles.skill_name}>
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image src={nodejs} alt="nodejs" height={64} width={64} />
              </div>
              <div className={styles.skill_name}>
                <h3>TYPESCRIPT</h3>
              </div>
            </div>
          </div>
          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image src={nodejs} alt="nodejs" height={64} width={64} />
              </div>
              <div className={styles.skill_name}>
                <h3>HTML5</h3>
              </div>
            </div>
          </div>
          <div className={styles.container_skill1}>
            <div className={styles.container_skill2}>
              <div className={styles.skill_img}>
                <Image src={nodejs} alt="nodejs" height={64} width={64} />
              </div>
              <div className={styles.skill_name}>
                <h3>CSS3</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
