import { useRef } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";

import classes from "./GetText.module.css";

const GetText = (props) => {
  const storeInputRef = useRef();
  const itemInputRef = useRef();

  const onCloseHandler = () => {
    document.getElementById("input-form").classList.add(classes["form-close"]);
    document.getElementById("backdrop").click();
    props.onClose();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const itemInputField = itemInputRef.current;
    const itemInput = itemInputField.value.trim();

    if (!itemInput.length > 0) {
      alert("Please add an item name...");
      return;
    }

    if (props.inputFor === "Store") {
      const storeInputField = storeInputRef.current;
      const storeInput = storeInputField.value.trim();
      if (!storeInput.trim().length > 0) {
        alert("Please add a store name...");
        return;
      }
      const store = { name: storeInput, items: [itemInput] };
      onCloseHandler();
      props.onAddStore(store);
    } else {
      props.onAddItem(itemInput);
      itemInputField.value = "";
    }
  };

  return (
    <Modal onClose={onCloseHandler}>
      <Card id='input-form' className={classes.form}>
        <form onSubmit={submitHandler}>
          {props.inputFor === "Store" && (
            <div>
              <label htmlFor='storeInput'>Store: </label>
              <input
                type='text'
                name='storeInput'
                id='storeInput'
                ref={storeInputRef}
              />
            </div>
          )}
          <div>
            <label htmlFor='itemInput'>Item: </label>
            <input
              type='text'
              name='itemInput'
              id='itemInput'
              ref={itemInputRef}
            />
          </div>
          <Button>Add</Button>
        </form>
      </Card>
    </Modal>
  );
};

export default GetText;
