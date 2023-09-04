import { useState } from "react";

import Arrow from "../../assets/Arrow";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import GetText from "../AddField/GetText";
import Item from "./Item";

import classes from "./Store.module.css";

const Store = (props) => {
  const store = props.store;
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);

  const openAddItem = () => {
    setIsAddItemOpen(true);
  };

  const closeAddItem = () => {
    setTimeout(() => {
      setIsAddItemOpen(false);
    }, 300);
  };

  const addItemHandler = (itemToAdd) => {
    if (store.items.some((item) => item === itemToAdd)) {
      alert("Item is already in this list...");
      return;
    }
    const updatedItemList = store.items.concat(itemToAdd);
    props.onUpdateStore(store.name, updatedItemList);
  };

  const removeItemHandler = (itemToRemove) => {
    const updatedItemList = store.items.filter((item) => item !== itemToRemove);
    props.onUpdateStore(store.name, updatedItemList);
  };

  const itemList = store.items.map((item) => {
    return <Item key={item} item={item} onRemoveItem={removeItemHandler} />;
  });

  return (
    <>
      {isAddItemOpen && (
        <GetText onClose={closeAddItem} onAddItem={addItemHandler} />
      )}
      <Card className={classes.store}>
        <div className={classes["store__header"]}>
          <h1 className={classes["store__title"]}>{store.name}</h1>
          <div className={classes.actions}>
            <Arrow />
            <Button onClick={openAddItem}>+</Button>
          </div>
        </div>
        {itemList}
      </Card>
    </>
  );
};

export default Store;
