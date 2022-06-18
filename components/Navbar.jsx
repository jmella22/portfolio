import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/photo1653585212.jpeg";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
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
          <div className={styles.menu_hb}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={styles.container_sidebar}>
        <div className={styles.sidebar_menu}>aqui va algo</div>
      </div>
    </div>
  );
};

export default Navbar;
