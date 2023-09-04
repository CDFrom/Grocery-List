import Card from "../UI/Card/Card";

import classes from "./Store.module.css";

const Store = (props) => {
  const store = props.store;

  return (
    <Card className={classes.store}>
      <h1 className={classes["store__title"]}>{store.name}</h1>
    </Card>
  );
};

export default Store;
