import { createContext, useState } from "react";
import data from "../data.json";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const [text, setText] = useState("");
  const [filtered, setFiltered] = useState(data);

  const handleChange = (event) => {
    const inputValue = event.target.value;

    setText(inputValue);
    setFiltered(
      data.filter((appart) =>
        appart.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  return (
    <MainContext.Provider value={{ handleChange, text, filtered }}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
