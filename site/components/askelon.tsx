import { NextPage } from "next";
import { Result } from "postcss";
import React from "react";
import GeneratedResult from "./generatedresult";
import Form from "./form";
import { User } from "aws-cdk-lib/aws-iam";

const AskElon: React.FC = () => {

  const ENDPOINT = "http://127.0.0.1:8000";

  const [isLoading, setIsLoading] = React.useState(false);
  const [HasResult, setHasResult] = React.useState(false);
  const [Username, setUsername] = React.useState("");
  const [Subject, setSubject] = React.useState("");
  const [Data, setData] = React.useState({});
  const DEFAULT_SUBJECT = "china";
  const DEFAULT_USERNAME = "elonmusk";

  const onRandomButton = async () => {
    console.log("Submitting for random");
    setHasResult(true);
    let response = await fetch(`${ENDPOINT}/generate_tweet_random`);
    const response_json = await response.json();
    console.log(response_json);
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

  return (
    <div>
      {displayedElement}
    </div>
  );
};

export default AskElon;