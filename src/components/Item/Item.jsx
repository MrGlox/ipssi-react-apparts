import "./Item.css";

const Item = ({ title, status, children }) => (
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
);

export default Item;
