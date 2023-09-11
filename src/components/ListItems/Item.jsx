import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Edit from "../../assets/Edit";

import classes from "./Item.module.css";

const Item = (props) => {
  const removeItem = () => {
    props.onRemoveItem(props.item);
  };

  return (
    <Card className={classes["list-item"]}>
      {props.item}
      <div className={classes["list-item__right"]}>
        <Button className={classes["button__edit"]}>
          <Edit />
        </Button>
        <Button onClick={removeItem} className={classes["button__complete"]}>
          &#10003;
        </Button>
      </div>
    </Card>
  );
};

export default Item;
