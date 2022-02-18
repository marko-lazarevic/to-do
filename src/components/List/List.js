import Item from "./Item";

import "./List.css";

function List(props) {
  const items = props.items;
  const list = items.map((item) => (
    <li key={item.id}>
      <Item
        id={item.id}
        data={item.data}
        onStatusUpdate={props.onStatusUpdate}
        onItemDelete={props.onItemDelete}
      />
    </li>
  ));

  return <ul className="list">{list}</ul>;
}

export default List;
