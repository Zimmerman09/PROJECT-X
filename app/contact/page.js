"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isNameValid = name.trim() !== "";
    const isEmailValid = email.trim() !== "" && email.includes("@");
    const isCommentValid = comment.trim() !== "";

    setIsFormValid(isNameValid && isEmailValid && isCommentValid);
  }, [name, email, comment]);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      alert("Fill the form first");
      return;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          animate={{
            y: "0",
            opacity: 1,
          }}
          initial={{
            y: "-100px",
            opacity: 0,
          }}
        >
          <div className={styles.txt1}>CONTACT US</div>
          <div className={styles.txt2}>
            CONTACT US BY FILLING THE FORM BELOW
          </div>
        </motion.div>
        <motion.div
          className={styles.form}
          animate={{
            x: "0",
            opacity: 1,
          }}
          initial={{
            x: "-1000px",
            opacity: 0,
          }}
          transition={{
            type: "spring",
          }}
        >
          <form onSubmit={handleSubmit} className={styles.formContainer} action="https://formspree.io/f/xrgnkkzv" method="POST">
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME"
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
            ></input>
            <input
              type="text"
              name="email"
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            ></input>
            <textarea
              name="message"
              type="text"
              placeholder="ADD COMMENT"
              value={comment}
              onChange={(e) => handleInputChange(e, setComment)}
            ></textarea>
            <button className={styles.btn1} type="submit">
              SUBMIT
            </button>
          </form>
        </motion.div>

        <div className={styles.btn2}>
          <Link href="../../">
            <button>MAIN PAGE</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
