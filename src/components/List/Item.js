import "./Item.css";

function Item(props) {
  const updateStatus = () => {
    props.onStatusUpdate(props.id);
  };

  function deleteItem() {
    props.onItemDelete(props.id);
  }

  let color = props.data.status ? "green" : "red";
  return (
    <div className="list-item">
      <div className="list-data">
        <h3 className="list-data-title">{props.data.title}</h3>
        <p className="list-data-desc">{props.data.desc}</p>
      </div>
      <button
        onClick={updateStatus}
        style={{ backgroundColor: color }}
        className="list-item-status"
      ></button>
      <button className="list-item-delete" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
}

export default Item;
