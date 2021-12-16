import { useContext } from "react";
import { Form, List } from "components";

import MainContext from "contexts/MainContext";

const Appart = () => {
  const { filtered, handleChange, text } = useContext(MainContext);

  return (
    <>
      <h2>Filtre</h2>
      <Form text={text} handleChange={handleChange}></Form>
      <h1>Appartments</h1>
      <List list={filtered} />
    </>
  );
};

export default Appart;
