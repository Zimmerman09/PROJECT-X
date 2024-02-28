import React from "react";
import styles from "./navbar.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className={styles.container}>
        <nav>
          <ul>
          <Link href="../../boxshadow">
            <li>BOX SHADOW</li>
            </Link>
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
