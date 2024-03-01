"use client"
import React from 'react'
import styles from './page.module.css'
import Navbar from '../components/navbar'
import {motion} from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { RxSlash } from "react-icons/rx";

const page = () => {

    const [copySuccess, setCopySuccess] = useState('');
      const copyToClipBoard = async (copyMe) => {
        try {
          await navigator.clipboard.writeText(copyMe);
          setCopySuccess('Copied!');
        } catch (err) {
          setCopySuccess('Failed to copy!');
        }
      };




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
           <div className={styles.scroll_data}>
            <span><BsChevronLeft className={styles.left}/></span>
            SCROLL DOWN
            <br/>
            FOR CODES
            <RxSlash className={styles.mid}/>
            <BsChevronRight className={styles.right}/>
           </div>
        </motion.div>
      </div>

      <div className={styles.container2}>
        <div className={styles.row1}>
            <div className={styles.card1}>
            <div className={styles.cssdata}>
                <button onClick={()=>copyToClipBoard( `box-shadow: 0px -25px 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), 25px 0 20px -20px rgba(0, 0, 0, 0.45);`
)}>
                    COPY CSS
                </button>
                    {copySuccess}
                </div>
            </div>
            <div className={styles.card1}>
            </div>
            <div className={styles.card1}>

            </div>
            <div className={styles.card1}>

            </div>
        </div>
        <div className={styles.row1}>
            <div className={styles.card1}>
                
            </div>
            <div className={styles.card1}>
            </div>
            <div className={styles.card1}>

            </div>
            <div className={styles.card1}>

            </div>
        </div>
        <div className={styles.row1}>
            <div className={styles.card1}>
                <button>
                    COPY
                </button>
            </div>
            <div className={styles.card1}>
            </div>
            <div className={styles.card1}>

            </div>
            <div className={styles.card1}>

            </div>
        </div>
      </div>
      
    </>
  )
}

export default page
