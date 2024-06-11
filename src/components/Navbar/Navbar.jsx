// import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMentOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menubtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={()=> setMentOpen(!menuOpen)}
        />
        <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMentOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experince">experince</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
