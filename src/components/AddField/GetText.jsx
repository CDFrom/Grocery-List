import { useRef } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import classes from "./GetText.module.css";

const GetText = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputField = inputRef.current;
    const input = inputField.value;

    inputField.value = "";
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='userInput'>{props.inputFor}: </label>
          <input type='text' name='userInput' id='userInput' ref={inputRef} />
        </div>
        <Button>Add</Button>
      </form>
    </Card>
  );
};

export default GetText;
