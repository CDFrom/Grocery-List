import Card from "../UI/Card/Card";
import Item from "./Item";

import classes from "./Store.module.css";

const Store = (props) => {
  const store = props.store;

  const itemList = store.items.map((item) => {
    return <Item key={item} item={item} />;
  });

  return (
    <Card className={classes.store}>
      <h1 className={classes["store__title"]}>{store.name}</h1>
      {itemList}
    </Card>
  );
};

export default Store;
