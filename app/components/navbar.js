import React from "react";
import styles from "./navbar.module.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <div className={styles.container}>
        <nav>
          <ul>
            <li>BOX SHADOW</li>
            <li>BUTTON DESIGN</li>
            <li>HOVER EFFECTS</li>
            <li>HTML ICONS</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
