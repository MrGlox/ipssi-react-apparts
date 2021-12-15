import Item from "../Item";

const List = ({ list = [], uniqueId = "test" }) => {
  if (list.length === 0) {
    return <div>Aucun appart trouvé</div>;
  }

  return (
    <div>
      {list.map(({ description, ...appart }, index) => (
        <Item key={index + uniqueId + "ItemList"} {...appart}>
          {description}
        </Item>
      ))}
    </div>
  );
};

export default List;
