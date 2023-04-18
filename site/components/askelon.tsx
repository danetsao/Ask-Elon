import { NextPage } from "next";
import React from "react";

const AskElon: React.FC = () => {

  const ENDPOINT = "http://127.0.0.1:8000";

  const [isLoading, setIsLoading] = React.useState(false);
  const [tweet, setTweet] = React.useState("");
  const [rawTweets, setRawTweets] = React.useState([]);
  const [subject, setSubject] = React.useState("");
  const [username, setUsername] = React.useState("");
  const DEFAULT_SUBJECT = "china";
  const DEFAULT_USERNAME = "elonmusk";

  const onRandomButton = async () => {
    console.log("Submitting for random");
    setIsLoading(true);
    const response = await 
      fetch(`${ENDPOINT}/generate_tweet_random`,
      {
      method: 'GET',
      mode: 'no-cors' as RequestMode,
    });
    const response_json = await response.json();
    console.log(response_json);
  }; 

  const onResult = (data: any) => {
    console.log("Here we will display tweets");
    setRawTweets(data.tweets);
    setTweet(data.generated_tweet);
    setSubject(data.subject);
    setUsername(data.username);
    console.log(data.generated_tweet);
  };

  return (
    <div>
      <p>Search</p>
      <button
      onClick={onRandomButton}
      >Search Random</button>
    </div>
  );
};

export default AskElon;