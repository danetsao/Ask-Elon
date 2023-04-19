import React from "react";

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
            tweetObjects[i] = <li>{cur}</li>;
        }
        return tweetObjects;
    }

    const tweetsList = generateTweetObjects(props.info["tweets"]);

    return (
        <div>
            <h1>Results</h1>
            <p>{props.info["generated_tweet"]}</p>
            <p>Username: {props.info["username"]}</p>
            <p>Subject: {props.info["subject"]}</p>
            <ul>{tweetsList}</ul>
            <button onClick={()=> props.setHasResult(false)}>Back</button>
            <button onClick={()=> props.onSubmit(props.info["username"], props.info["subject"])}>REGENERATE</button>
        </div>
    );
};

export default GeneratedResult;
