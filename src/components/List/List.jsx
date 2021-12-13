import Item from "../Item";

import data from "../../data.json";

const List = () => (
  <div>
    {data.map(({ description, ...appart }) => (
      <Item {...appart}>{description}</Item>
    ))}
  </div>
);

export default List;
