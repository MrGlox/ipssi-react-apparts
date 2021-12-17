import { useContext } from "react";
import { useParams } from "react-router-dom";

import MainContext from "contexts/MainContext";

const Appart = () => {
  const { id } = useParams();
  const { data } = useContext(MainContext);

  const { title, status, description } = data.find(
    (appart) => appart.id.toString() === id
  );

  return (
    <div>
      <h1>
        {title}{" "}
        <div
          className="dot"
          style={
            status ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
        ></div>
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default Appart;

// const [{ title, status, description }, setAppart] = useState({});
// console.log(id);

// useEffect(() => {
//   setAppart(data.find((appart) => appart.id.toString() === id));
// });
