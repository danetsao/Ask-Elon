import { NextPage } from "next";
import { Result } from "postcss";
import React from "react";
import GeneratedResult from "./generatedresult";
import Form from "./form";
import Popup from "./popup"
import styles from "../styles/askelon.module.css";

const AskElon: React.FC = () => {

  const ENDPOINT = "https://ask-elon-api.vercel.app";

  const [isLoading, setIsLoading] = React.useState(false);
  const [HasResult, setHasResult] = React.useState(false);
  const [Username, setUsername] = React.useState("");
  const [Subject, setSubject] = React.useState("");
  const [popUp, setPopUp] = React.useState(false);
  const [Data, setData] = React.useState({});
  const DEFAULT_SUBJECT = "china";
  const DEFAULT_USERNAME = "elonmusk";

  const onRandomButton = async () => {
    console.log("Submitting for random");
    let response = await fetch(`${ENDPOINT}/generate_tweet_random`);
    const response_json = await response.json();
    console.log(response_json);
    setData(response_json);
    setHasResult(true);
  };

  const onSubmit = async (inputUsername: Text, inputSubject: Text) => {
    console.log("Submitting for random");
    setIsLoading(true);
    let urlInput = `?username=${inputUsername}&subject=${inputSubject}`
    let response = await fetch(`${ENDPOINT}/generate_tweet${urlInput}`);
    const response_json = await response.json();
    console.log(response_json);
    setData(response_json);
    setHasResult(true);
  }

  const onResult = (props: any) => {
    console.log("Here we will display tweets");
    setData(props.data);
    console.log(props.generated_tweet);
  };

  let displayedElement = (<div>Displayed Element Inititalizer</div>);

  if (popUp) {
    console.log("showing popup of how-to");
  } 
  if (HasResult) {
    displayedElement = (
      <GeneratedResult
      info={Data}
      setHasResult={setHasResult}
      onSubmit={onSubmit}
      />
    );
  } 

  else {
    displayedElement = (
      <Form
      onSubmit={onSubmit}
      Username={Username}
      setUsername={setUsername}
      Subject={Subject}
      setSubject={setSubject}
      onRandomButton={onRandomButton}
      />
    );
  }
  function noResult() {
    setHasResult(false);
  }
  function doPopUp() {
    setHasResult(false);
    setPopUp(true);
  }
  const year = new Date().getFullYear();
  const githubUrl = 'https://github.com/danetsao';
  const header = (
    <div className={styles.header_container}>
      <div>
        <button onClick={noResult} className={styles.header_title}>Ask Elon</button>
      </div>
      <div>
        <button onClick={doPopUp} className={styles.header_title} style={{ marginLeft: 'auto' }}>How to use?</button>
      </div>
    </div>
  );
  
  const footer = (
    <footer className={styles.footer}>
      <p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">Dane Tsao</a> &copy; {year}
      </p>
    </footer>
  );
  function onClose() {
    setPopUp(false);
    setHasResult(false);
  }
  

  return (
    <div>
      {header}
      {popUp && <Popup onClose={onClose}/>}
      {displayedElement}
      {footer}
    </div>
  );
};

export default AskElon;