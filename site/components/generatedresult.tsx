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
        <div className={styles.tweetContainer}>
          <div className={styles.avatar}>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              @{jsonGeneratedTweets[i]["username"]}
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
    <div>
        <div className={styles.container}>
            <h1 className={styles.title}>@{props.info["username"]}</h1>

            <p className={styles.text}>{props.info["generated_tweet"]}</p>
            <p className={styles.timestamp}></p>

                <button className={styles.buttons}onClick={()=> props.setHasResult(false)}>Back</button>
                <button className={styles.buttons}onClick={()=> props.onSubmit(props.info["username"], props.info["subject"])}>Regenerate</button>
        </div>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Scraped Tweets</h1>
        </div>

        {tweetsList}
  </div>
    );
};

export default GeneratedResult;
