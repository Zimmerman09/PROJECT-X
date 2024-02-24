"use client"

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  return(
    <>
     <div className={styles.container}>
      <motion.div className={styles.header}
      
      animate={{
        y:"0",
        opacity:1
      }}
      initial={{
        y:"-100px",
        opacity:0
      }}
      
      
      
      
      >
        <div className={styles.txt1}>
          CONTACT US 
        </div>
        <div className={styles.txt2}>
          CONTACT US BY FILLING THE FORM BELOW
        </div>
      </motion.div>
      <motion.div className={styles.form}
      
      animate={{
        x:"0",
        opacity:1,
      }}
      initial={{
        x:"-1000px",
        opacity:0,
      }}
      transition={{
        type:"spring",

      }}
      
      
      >
        <form>
          <input type="text" placeholder="ENTER YOUR NAME"></input>
          <input type="email" placeholder="ENTER YOUR EMAIL"></input>
          <textarea placeholder="ADD COMMENT"></textarea>
        </form>
        <div className={styles.btn1}>
          <button>SUBMIT</button>
        </div>
      </motion.div>

      <div className={styles.btn2}>
      <Link href="../../">
        <button>MAIN PAGE</button>
        </Link>
      </div>



     </div>






    </>
  )

    

 
};

export default page;
