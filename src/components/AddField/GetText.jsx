import { useRef } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";

import classes from "./GetText.module.css";

const GetText = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputField = inputRef.current;
    const input = inputField.value;

    if (props.inputFor === "Store") {
    } else if (props.inputFor === "Item") {
      props.onAddItem(input);
    }

    inputField.value = "";
  };

  return (
    <Modal onClose={props.onClose}>
      <Card className={classes.form}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor='userInput'>{props.inputFor}: </label>
            <input type='text' name='userInput' id='userInput' ref={inputRef} />
          </div>
          <Button>Add</Button>
        </form>
      </Card>
    </Modal>
  );
};

export default GetText;
