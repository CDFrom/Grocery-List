import { useEffect, useRef, useState } from "react";

import Button from "./components/UI/Button/Button";
import GetText from "./components/AddField/GetText";
import Store from "./components/ListItems/Store";

import classes from "./App.module.css";

const App = () => {
  const [isAddStoreOpen, setIsAddStoreOpen] = useState(false);
  const [storeData, setStoreData] = useState([]);

  const openAddStore = () => {
    setIsAddStoreOpen(true);
  };

  const closeAddStore = () => {
    setTimeout(() => {
      setIsAddStoreOpen(false);
    }, 300);
  };

  useEffect(() => {
    const data = localStorage.getItem("DATA");
    if (data) {
      setStoreData(JSON.parse(data));
    }
  }, []);

  const firstRender = useRef(true);
  useEffect(() => {
    const data = JSON.stringify(storeData);
    if (!firstRender.current) localStorage.setItem("DATA", data);
    if (firstRender.current) firstRender.current = false;
  }, [storeData]);

  const addStoreHandler = (newStore) => {
    if (storeData.some((store) => store.name === newStore.name)) {
      alert("Store already exists");
      return;
    }

    setStoreData((prevState) => {
      return [...prevState, newStore];
    });
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
      {isAddStoreOpen && (
        <GetText
          onClose={closeAddStore}
          onAddStore={addStoreHandler}
          inputFor='Store'
        />
      )}
      <Button className={classes["new-store"]} onClick={openAddStore}>
        New Store
      </Button>
      {storeList}
    </>
  );
};

export default App;
