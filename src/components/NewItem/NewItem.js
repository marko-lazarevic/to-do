import { useState } from "react";

import "./NewItem.css";

function NewItem(props) {
  const [newTitle, newTitleUpdate] = useState("");
  const [newDesc, newDescUpdate] = useState("");

  const titleChangeHandler = (event) => {
    newTitleUpdate(event.target.value);
  };

  const descChangeHandler = (event) => {
    newDescUpdate(event.target.value);
  };

  function addNew(event) {
    event.preventDefault();
    props.onAddNew({ title: newTitle, desc: newDesc });
    newTitleUpdate("");
    newDescUpdate("");
  }

  return (
    <div className="new-item">
      <h2>Add new item:</h2>
      <form onSubmit={addNew}>
        <label>Title</label>
        <input
          type="text"
          value={newTitle}
          placeholder="Title"
          onChange={titleChangeHandler}
        />
        <label>Description</label>
        <input
          type="text"
          value={newDesc}
          placeholder="Description"
          onChange={descChangeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewItem;
