import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ id, title, status, children }) => (
  <Link to={`/appart/${id}`}>
    <div>
      <h3>
        {title}{" "}
        <div
          className="dot"
          style={
            status ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
        ></div>
      </h3>
      <p>{children}</p>
    </div>
  </Link>
);

export default Item;
