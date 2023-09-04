import { useState } from "react";

import GetText from "./components/AddField/GetText";

import "./App.css";

const DUMMY_DATA = [
  { store: "Costco", items: ["Milk", "Eggs", "Bananas"] },
  { store: "Safeway", items: ["Grapes", "Bread", "Chips"] },
];

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

  return <>{isInputOpen && <GetText onClose={closeInput} />}</>;
};

export default App;
