"use client"


import React from 'react'
import Link from "next/link";
import styles from './page.module.css'
import {motion} from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';

const page = () => {
  return (
   <>
     <div className={styles.container}>
       <motion.div className={styles.header}
       animate={{
        y:0,
        opacity:1
       }}
       initial={{
        y:"-30px",
        opacity:0
       }}



       
       
       >
        <div className={styles.txt1}>
            SERVICES THAT WE HAVE
        </div>
        <div className={styles.txt2}>
            GET TO KNOW ABOUT THE SERVICES THAT WE PROVIDE 
        </div>
       </motion.div>

       <div className={styles.servicelist}>
       <div className={styles.services}>
       <motion.div className={styles.service1}
       animate={{
        x:0,
        opacity:1
       }}
       initial={{
        x:"-100px",
        opacity:0,


       }}
     
       
       
       >
        <h1>BOX-SHADOW</h1>
        <p>The CSS box-shadow property adds shadow effects around an element's frame, customizable in size, color, and blur radius.</p>
       </motion.div>
       <motion.div className={styles.service1}
         animate={{
            y:0,
            opacity:1
           }}
           initial={{
            y:"100px",
            opacity:0,
            
    
           }}



       
       >
       <h1>BUTTON DESIGN</h1>
        <p>The CSS box-shadow property adds shadow effects around an element's frame, customizable in size, color, and blur radius.</p>
       </motion.div>
       <motion.div className={styles.service1}
       

       animate={{
        x:0,
        opacity:1
       }}
       initial={{
        x:"100px",
        opacity:0,
        

       }}
     
       
       >
       <h1>HTML ICONS</h1>
        <p>The CSS box-shadow property adds shadow effects around an element's frame, customizable in size, color, and blur radius.</p>
       </motion.div>

       </div>


       </div>
       <Link href="../../">

      <div className={styles.btn1}>
        <button>MAIN PAGE</button>
      </div>
       </Link>

     </div>




   </>
  )
}

export default page
