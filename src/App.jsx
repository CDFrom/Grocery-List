import { useState } from "react";

import GetText from "./components/AddField/GetText";

import "./App.css";

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
