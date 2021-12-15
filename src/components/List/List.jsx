import Item from "../Item";

const List = ({ list = [] }) => {
  if (list.length === 0) {
    return <div>Aucun appart trouvé</div>;
  }

  return (
    <div>
      {list.map(({ description, ...appart }) => (
        <Item {...appart}>{description}</Item>
      ))}
    </div>
  );
};

export default List;
