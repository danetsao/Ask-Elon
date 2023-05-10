import React from "react";
import styles from "../styles/form.module.css";

interface FormProps {
  onSubmit: any;
  Username: any;
  setUsername: any;
  Subject: any;
  setSubject: any;
  onRandomButton: any;
}

const Form: React.FC<FormProps> = (props) => {

  const updateSubject = (text: string) => {
    if (1) {
      props.setSubject(text);
      console.log("Username subject to: " +text);
    }
  };
  const updateUsername = (text: string) => {
    if (1) {
      props.setUsername(text);
      console.log("Username updating to: " + text);
    }
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor={styles.username}>Username</label>
          <input
            className={styles.input_username}
            type="text"
            id="username"
            placeholder="@elonmusk"
            value={props.Username}
            onChange={(e) => updateUsername(e.currentTarget.value)}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor={styles.subject}>Subject</label>
          <input
            className={styles.input_subject}
            type="text"
            id="subject"
            placeholder="China"
            value={props.Subject}
            onChange={(e) => updateSubject(e.currentTarget.value)}
          />
        </div>
        <div className={styles.form_group}>
          <button
            type="button"
            className={styles.button_primary}
            onClick={() => props.onSubmit(props.Username, props.Subject)}
          >
            Search
          </button>
          <button
            type="button"
            className={styles.button_secondary}
            onClick={() => props.onRandomButton()}
          >
            Surprise Me!
          </button>
        </div>
      </form>
      <p>Note: currently using dummy data due to break in Twint</p>
    </div>
  );
};

export default Form;

