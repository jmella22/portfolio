import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/photo1653585212.jpeg";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <Image src={logo} alt="foto jose mella" height={50} width={50} />
        <div>
          <ul className={styles.menu}>
            <Link href={"/"}>
              <li className={styles.link_menu}>Home</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.link_menu}>About</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.link_menu}>Skills</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.link_menu}>Projects</li>
            </Link>
            <Link href={"/"}>
              <li className={styles.link_menu}>Contact</li>
            </Link>
          </ul>
          <div className={styles.menu_hb} onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? styles.container_sidebar : ""}>
        <div
          className={nav ? styles.sidebar_menu_true : styles.sidebar_menu_false}
        >
          <div>
            <div className={styles.header_sidebar_menu}>
              <Image src={logo} alt="foto jose mella" height={35} width={35} />
              <div
                className={styles.sidebar_menu_button_close}
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className={styles.sidebar_menu_legendary}>
              <p className={styles.legendary}>
                let's build something legendary together
              </p>
            </div>
          </div>
          <div className={styles.container_menu_sidebar}>
            <ul className={styles.menu_sidebar}>
              <Link href={"/"}>
                <li className={styles.link_menu_sidebar}>Home</li>
              </Link>
              <Link href={"/"}>
                <li className={styles.link_menu_sidebar}>About</li>
              </Link>
              <Link href={"/"}>
                <li className={styles.link_menu_sidebar}>Skills</li>
              </Link>
              <Link href={"/"}>
                <li className={styles.link_menu_sidebar}>Projects</li>
              </Link>
              <Link href={"/"}>
                <li className={styles.link_menu_sidebar}>Contact</li>
              </Link>
            </ul>
            <div className={styles.container_connect}>
              <p className={styles.connect_txt}>Let's Connect</p>
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
      </div>
    </div>
  );
};

export default Navbar;
