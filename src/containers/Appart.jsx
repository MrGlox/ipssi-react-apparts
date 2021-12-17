import { useContext } from "react";
import { useParams } from "react-router-dom";

import MainContext from "contexts/MainContext";

const Appart = () => {
  const { id } = useParams();
  const { data } = useContext(MainContext);

  const appart = data.find((appart) => appart.id.toString() === id);

  // 404 part
  if (!appart) {
    return <div>Appartement non trouvé</div>;
  }

  const { title, status, description } = appart;

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
