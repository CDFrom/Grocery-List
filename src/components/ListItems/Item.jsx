import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <Card className={classes["list-item"]}>
      {props.item}
      <Button>X</Button>
    </Card>
  );
};

export default Item;
