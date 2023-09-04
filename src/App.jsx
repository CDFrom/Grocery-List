import { useState } from "react";

import GetText from "./components/AddField/GetText";

import "./App.css";
import Store from "./components/ListItems/Store";

const DUMMY_DATA = [
  { name: "Costco", items: ["Milk", "Eggs", "Bananas"] },
  { name: "Safeway", items: ["Grapes", "Bread", "Chips"] },
];

const App = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [storeData, setStoreData] = useState(DUMMY_DATA);

  const openInput = () => {
    setIsInputOpen(true);
  };

  const closeInput = () => {
    setTimeout(() => {
      setIsInputOpen(false);
    }, 300);
  };

  const updateStoreHandler = (storeName, itemList) => {
    const index = storeData.findIndex((store) => store.name === storeName);

    setStoreData((prevState) => {
      let newList = [...prevState];
      if (itemList.length < 1) {
        newList.splice(index, 1);
        return newList;
      }

      newList[index] = { ...newList[index], items: itemList };
      console.log(newList);
      return newList;
    });
  };

  const storeList = storeData.map((store) => {
    return (
      <Store
        key={store.name}
        store={store}
        onUpdateStore={updateStoreHandler}
      />
    );
  });

  return (
    <>
      {isInputOpen && <GetText onClose={closeInput} />}
      {storeList}
    </>
  );
};

export default App;
