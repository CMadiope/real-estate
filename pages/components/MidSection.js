import React from "react";
import family from "../../public/images/family.svg";
import styled from "styled-components";
import styles from '../../styles/MidSection.module.css'

const MidSection = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h3 className={styles.h3}>
          TIME TO MOVE
        </h3>
      </div>
    </div>
  );
};

export default MidSection;