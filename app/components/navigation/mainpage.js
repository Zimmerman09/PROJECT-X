"use client";

import React, { useRef } from "react";
import styles from ".//mainpage.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Mainpage = () => {
  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles.circle}
          animate={{
            x: "800px",
            y: "100px",
            opacity: 1,
            scale: 1,
            rotate: 360,
            background: " linear-gradient(31deg,#33313c,#9330300f);",
          }}
          initial={{
            opacity: 0.2,
            scale: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 5,
            delay: 1,
          }}
        ></motion.div>
        <motion.div
          className={styles.circle2}
          animate={{
            x: "-800px",
            y: "-200px",
            scale: 1,
          }}
          initial={{
            scale: 0,
          }}
          transition={{
            type: "spring",
            delay: 1,
          }}
        ></motion.div>
        <div className={styles.txt}>
          <motion.div
            className={styles.main}
            animate={{
              x: "0px",
              opacity: 1,
            }}
            initial={{
              x: "500px",
              opacity: 0,
            }}
            transition={{
              delay: 1,
            }}
          >
            CSS KIT
          </motion.div>
          <motion.div
            className={styles.childtxt}
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: "-200px",
              opacity: 0,
            }}
            transition={{
              duration: 1,
              staggerChildren: 2,
              type: "spring",
              stiffness: 50,
            }}
          >
            MAKE YOUR WEBSITES LOOK MORE ATTRACTIVE
          </motion.div>
        </div>

        <div className={styles.end}>
          <motion.div
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              opacity: 0,
              x: "-30px",
            }}
            transition={{
              type: "keyframes",
              delay: 1.5,
            }}
          >
            <button className={styles.btn1}>
              <span className={styles.btn1txt}>CONTACT US</span>
            </button>
          </motion.div>
          <motion.div
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              opacity: 0,
              x: "30px",
            }}
            transition={{
              type: "keyframes",
              delay: 1.5,
            }}
          >
            <Link href="../../contact">
              <button className={styles.btn1}>
                <span className={styles.btn1txt}>ABOUT US</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
