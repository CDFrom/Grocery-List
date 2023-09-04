import Card from "../UI/Card/Card";

import classes from "./Store.module.css";

const Store = (props) => {
  return (
    <Card className={classes.store}>
      <h1 className={classes["store__title"]}>{props.store}</h1>
    </Card>
  );
};

export default Store;
