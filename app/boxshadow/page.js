"use client"


import React from 'react'
import styles from './page.module.css'
import Navbar from '../components/navbar'
import {motion} from 'framer-motion'
import Link from 'next/link'



const page = () => {
  return (
    <>
      <div className={styles.container1}>
        <motion.div className={styles.circle1}
        
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        initial={{
            x:"50vb",
            opacity:0,
            scale:0

        }}
        transition={{
            type:"spring",
            stiffness:100
            
        }}
        
        
        
        >

        </motion.div>
        <motion.div className={styles.circle2}
        
        animate={{
            y:0,
            opacity:1,
            scale:1
        }}
        initial={{
            y:"100px",
            opacity:0.1,
            scale:0.5
        }}
        transition={{
            type:"spring",
            
        }}
        
        
        >

        </motion.div>
      <motion.div className={styles.btn}
       animate={{
        y:0,
        opacity:1
    }}
    initial={{
        y:"-30px",
        opacity:0
    }}
    transition={{
        type:"spring",
        delay:2
        
    }}
      
      
      >
                  <Link href="../../">
        <button className={styles.btn1}>MAIN PAGE</button>
</Link>
      </motion.div>
        <div className={styles.heading}>
            <motion.div
            
            animate={{
                y:0,
                opacity:1
            }}
            initial={{
                y:"60px",
                opacity:0
            }}
            transition={{
                type:"spring",
                
            }}
            >
            GET 100 BEAUTIFUL CSS BOX-SHADOWS
            </motion.div>
            <motion.div 
             animate={{
                y:0,
                opacity:1
            }}
            initial={{
                y:"60px",
                opacity:0
            }}
            transition={{
                type:"spring",
                delay:1
                
            }}>
            CODES WITH JUST
            </motion.div>
            <motion.div className={styles.txt1}
             animate={{
                y:0,
                opacity:1
            }}
            initial={{
                y:"60px",
                opacity:0
            }}
            transition={{
                type:"spring",
                delay:1.2
                
            }}>
            ONE CLICK
            </motion.div>
        </div>
        <motion.div className={styles.btncon}
        
        animate={{
            y:0,
            opacity:1
        }}
        initial={{
            y:"30px",
            opacity:0
        }}
        transition={{
            type:"spring",
            delay:2.1
            
        }}
        
        
        
        >
            <button className={styles.btn1}>CODES!!</button>
        </motion.div>
      </div>
    </>
  )
}

export default page
