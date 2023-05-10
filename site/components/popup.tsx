import React from "react";
import styles from "../styles/popup.module.css";

interface PopUpProps {
    onClose: any;
  }

  

  const Popup: React.FC<PopUpProps> = (props) => {
    return (
      <div className={styles.popupContainer}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <div className={styles.popupContent}>
          <h3 className={styles.todoTitle}>How to use?</h3>
          <p className={styles.popupTextContent}>Enter a username and subject</p>
          <p className={styles.popupTextContent}>The app will then scrape tweets using Twint</p>
          <p className={styles.popupTextContent}>And then chain those together into a unique tweet!</p>
          <h3 className={styles.todoTitle}>Any questions!</h3>
          <p className={styles.popupTextContent}>Contact me</p>
          <div className={styles.contactLinks}>
          <a href="mailto:danetsao@gmail.com" className={styles.emoji}>
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/danetsao" className={styles.emoji}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/danetsao" className={styles.emoji}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
          <span className={styles.popupClose} onClick={props.onClose}></span>
        </div>
      </div>
    );
  };
  
  
  

export default Popup;