"use client";
import React, { useState } from "react";
import Head from "next/head";
import styles from "./styles/resume.module.css";

const Resume: React.FC = () => {
  // State to toggle visibility of the Skills section
  const [showSkills, setShowSkills] = useState(true);

  // Function to toggle the Skills section visibility
  const toggleSkills = () => {
    setShowSkills((prevShowSkills) => !prevShowSkills);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Resume - Muhammad Shayan Ahmed</title>
      </Head>

      {/* Personal Information Section */}
      <section className={styles.section}>
        <h1 className={styles.heading}>MUHAMMAD SHAYAN AHMED</h1>
        <p><strong>Phone:</strong> +92 312 3354303</p>
        <p><strong>Email:</strong> shayanahmed8484@gmail.com</p>
        <p><strong>Address:</strong> Karachi, Sindh, Pakistan</p>
        <p><strong>DOB:</strong> 20-Nov-2004</p>
      </section>

      {/* Education Section */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Education</h2>
        <p><strong>Bachelor of Science UG (Present):</strong> Sir Syed University of Engineering And Technology (SSUET)</p>
        <p><strong>Field:</strong> Data Science</p>
        <p><strong>Intermediate:</strong> Jinnah Govt. College Nazimabad</p>
        <p><strong>Matriculation:</strong> M.E Foundation School</p>
      </section>

      {/* Skills Section with Toggle Button */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Skills</h2>
        <button onClick={toggleSkills} className={styles.button}>
          {showSkills ? "Hide Skills" : "Show Skills"}
        </button>
        {showSkills && (
          <ul className={styles.list}>
            <li>Python (Flask API)</li>
            <li>Typescript</li>
            <li>Web Development (HTML, CSS, JS)</li>
            <li>Next.js</li>
            <li>WordPress (Basic)</li>
            <li>Digital Literacy</li>
            <li>Communication & Soft Skills</li>
          </ul>
        )}
      </section>

      {/* Objective Section */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Objective</h2>
        <p>
          To secure a challenging position in a dynamic organization where I can
          contribute my skills and passion for learning, while gaining practical
          experience and professional growth.
        </p>
      </section>

      {/* Certificates Section */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Certificates</h2>
        <ul className={styles.list}>
          <li>Digital Literacy - DigiSkill Training (DSPT2.0-BATCH-03)</li>
          <li>Freelancing - DigiSkill Training (DSPT2.0-BATCH-01)</li>
          <li>WordPress (Basic) - DigiSkill Training (DSPT2.0-BATCH-02)</li>
          <li>Communication & Soft Skill - DigiSkill Training (DSPT2.0-BATCH-03)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
