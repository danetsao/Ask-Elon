import React from "react";

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
        <div>
            <h1>form</h1>

            <h2>Username</h2>
            <input
            type="text"
            placeholder="@elonmusk"
            onChange={(e) => updateSubject(e.currentTarget.value)}
            ></input>

            <h2>Subject</h2>
            <input
            type="text"
            placeholder="China"
            onChange={(e) => updateUsername(e.currentTarget.value)}
            ></input>

            <button onClick={()=> props.onSubmit(props.Username, props.Subject)}>Search</button>

            <button onClick={()=> props.onRandomButton()}>Suprise Me!</button>
        </div>
    );
};

export default Form;