"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [ready, setReady] = useState(false);
  const [state, handleSubmit] = useForm("xrgnkkzv");
  const [successful, setSuccessful] = useState(false);

  let isNameValid = name.length > 3;
  let isEmailValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  let isCommentValid = comment.length > 10;

  useEffect(() => {
    setIsFormValid(isNameValid && isEmailValid && isCommentValid);
    setReady(false);
  }, [name, email, comment]);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  function checkSubmission(e) {
    setReady(true);
    if (isFormValid) {
      handleSubmit(e);
      setSuccessful(true);
    }
  }

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkSubmission(e);
            }}
            className={styles.formContainer}
            action="https://formspree.io/f/xrgnkkzv"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME"
              value={name}
              onChange={(e) => handleInputChange(e, setName)}
            ></input>
            {ready && !isNameValid && (
              <p className={styles.danger}>Please Enter Your Valid Name</p>
            )}
            <input
              type="text"
              name="email"
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            ></input>
            {ready && !isEmailValid && (
              <p className={styles.danger}>Please Enter A Valid Email</p>
            )}
            <textarea
              name="message"
              type="text"
              placeholder="ADD COMMENT"
              value={comment}
              onChange={(e) => handleInputChange(e, setComment)}
            ></textarea>
            {ready && !isCommentValid && (
              <p className={styles.danger}>Comment Is Too Short</p>
            )}
            <button className={styles.btn1} type="submit">
              SUBMIT
            </button>
            {successful ? (
              <p className={styles.success}>Form submitted successfully!</p>
            ) : (
              ""
            )}
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
