import { useState } from "react";

import GetText from "./components/AddField/GetText";

import "./App.css";
import Store from "./components/ListItems/Store";

const DUMMY_DATA = [
  { name: "Costco", items: ["Milk", "Eggs", "Bananas"] },
  { name: "Safeway", items: ["Grapes", "Bread", "Chips"] },
];

const storeList = DUMMY_DATA.map((store) => {
  return <Store key={store.name} store={store} />;
});

const App = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);

  const openInput = () => {
    setIsInputOpen(true);
  };

  const closeInput = () => {
    setTimeout(() => {
      setIsInputOpen(false);
    }, 300);
  };

  return (
    <>
      {isInputOpen && <GetText onClose={closeInput} />}
      {storeList}
    </>
  );
};

export default App;
