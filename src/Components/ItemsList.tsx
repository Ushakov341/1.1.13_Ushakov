import Item from './Item';

const ItemsList = () => {
  return (
    <ul className="todo-list">
      <Item />
      <Item />
      <Item />
    </ul>
  );
};

export default ItemsList;