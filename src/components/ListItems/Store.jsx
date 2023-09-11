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
  const [isEditItemOpen, setIsEditItemOpen] = useState(false);
  const [isShelfOpen, setIsShelfOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState();

  const openAddItem = () => {
    setIsAddItemOpen(true);
  };

  const closeAddItem = () => {
    setTimeout(() => {
      setIsAddItemOpen(false);
    }, 300);
  };

  const openEditItem = (item) => {
    setItemToEdit(item);
    setIsEditItemOpen(true);
  };

  const closeEditItem = () => {
    setTimeout(() => {
      setIsEditItemOpen(false);
    }, 300);
  };

  const updateShelf = () => {
    const element = document.getElementById(`${store.name}_arrow`);
    if (isShelfOpen) {
      element.classList.remove(classes["arrow-open"]);
      element.classList.add(classes["arrow-close"]);
    } else {
      element.classList.remove(classes["arrow-close"]);
      element.classList.add(classes["arrow-open"]);
    }

    setIsShelfOpen(!isShelfOpen);
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

  const editItemHandler = (editedItem) => {
    const index = store.items.findIndex((item) => item === itemToEdit);
    let newItemList = [...store.items];
    newItemList[index] = editedItem;
    const updatedItemList = newItemList;
    props.onUpdateStore(store.name, updatedItemList);
  };

  const itemList = store.items.map((item) => {
    return (
      <Item
        key={item}
        item={item}
        onRemoveItem={removeItemHandler}
        onEditItem={() => openEditItem(item)}
      />
    );
  });

  return (
    <>
      {isAddItemOpen && (
        <GetText onClose={closeAddItem} onAddItem={addItemHandler} />
      )}
      {isEditItemOpen && (
        <GetText
          onClose={closeEditItem}
          onEditItem={editItemHandler}
          inputFor='Edit'
          item={itemToEdit}
        />
      )}
      <Card className={classes.store}>
        <div className={classes["store__header"]}>
          <div className={classes.title} onClick={updateShelf}>
            <h1 className={classes["store__title"]}>{store.name}</h1>
            <Arrow id={`${store.name}_arrow`} onClick={updateShelf} />
          </div>
          <Button onClick={openAddItem}>+</Button>
        </div>
        {isShelfOpen && itemList}
      </Card>
    </>
  );
};

export default Store;
