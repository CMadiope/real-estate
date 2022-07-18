import React from "react";
import family from "../../public/images/family.svg";
import styled from "styled-components";
import styles from '../../styles/MidSection.module.css'

const MidSection = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h3 className={styles.h3}>
          NEED A HOUSE?
        </h3>
        <div className={styles.searchcontainer}>
          <div className={styles.topnav}>
          <a>
            To Buy
          </a>
          <a>
            To Rent
          </a>
          <a>
            Auction
          </a>
          </div>
          <form>
            <input className={styles.input} type="text" placeholder="Neighbourhood..." />
            <input type="submit" value='SEARCH' id={styles.search} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MidSection;