import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import classes from "./Item.module.css";

const Item = (props) => {
  const removeItem = () => {
    props.removeItem(props.item);
  };

  return (
    <Card className={classes["list-item"]}>
      {props.item}
      <Button onClick={removeItem}>X</Button>
    </Card>
  );
};

export default Item;
