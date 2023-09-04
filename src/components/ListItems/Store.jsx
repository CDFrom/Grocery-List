import Card from "../UI/Card/Card";
import Item from "./Item";

import classes from "./Store.module.css";

const Store = (props) => {
  const store = props.store;

  const removeItemHandler = (itemToRemove) => {
    const updatedItemList = store.items.filter((item) => item !== itemToRemove);
    props.onUpdateStore(store.name, updatedItemList);
  };

  const itemList = store.items.map((item) => {
    return <Item key={item} item={item} onRemoveItem={removeItemHandler} />;
  });

  return (
    <Card className={classes.store}>
      <h1 className={classes["store__title"]}>{store.name}</h1>
      {itemList}
    </Card>
  );
};

export default Store;
