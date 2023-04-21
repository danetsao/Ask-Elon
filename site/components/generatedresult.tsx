import React from "react";
import styles from "../styles/generatedresult.module.css";

interface ResultProps {
  info: any;
  setHasResult: any;
  onSubmit: any;
}

const GeneratedResult: React.FC<ResultProps> = (props) => {
  function generateTweetObjects(jsonGeneratedTweets: []) {
    let tweetObjects = [];
    for (let i = 0; i < jsonGeneratedTweets.length; i++) {
      let cur = "";
      cur += "user " + jsonGeneratedTweets[i]["username"] + " ";
      cur += "tweet " + jsonGeneratedTweets[i]["tweet"] + " ";
      cur += "timestamp " + jsonGeneratedTweets[i]["timestamp"];
      tweetObjects[i] = (
        <div className={styles.tweet}>
          <div className={styles.avatar}>
            <img src={jsonGeneratedTweets[i]["avatar"]} alt="avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.username}>
              {jsonGeneratedTweets[i]["username"]}
            </div>
            <div className={styles.timestamp}>
              {jsonGeneratedTweets[i]["timestamp"]}
            </div>
            <div className={styles.text}>{jsonGeneratedTweets[i]["tweet"]}</div>
          </div>
        </div>
      );
    }
    return tweetObjects;
  }

  const tweetsList = generateTweetObjects(props.info["tweets"]);

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Results</h1>

        <p>{props.info["generated_tweet"]}</p>
        <p>Username: {props.info["username"]}</p>
        <p>Subject: {props.info["subject"]}</p>

        <div className={styles.container}>{tweetsList}</div>

        <div className={styles.buttons}>
            <button onClick={()=> props.setHasResult(false)}>Back</button>
            <button onClick={()=> props.onSubmit(props.info["username"], props.info["subject"])}>REGENERATE</button>
        </div>
    </div>
    );
};

export default GeneratedResult;
