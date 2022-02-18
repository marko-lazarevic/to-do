import { useState } from "react";

import List from "./components/List/List";
import NewItem from "./components/NewItem/NewItem";
import Message from "./components/Message/Message";

import "./App.css";

function App() {
  const [list, updateList] = useState([]);
  const [message, updateMessage] = useState();

  function statusUpdateHandler(id) {
    updateList((oldList) => {
      for (var item of oldList) {
        if (item.id === id) {
          item.data.status = !item.data.status;
        }
      }
      return [...oldList];
    });
  }

  function addNewItem(data) {
    let title = data.title.trim();
    let desc = data.desc.trim();

    if (title.length === 0) {
      updateMessage({
        title: "Error: Title field empty!",
        note: "Title field must be filled with non-empty value!",
        type: "error",
      });
      return;
    }

    updateList((oldList) => {
      let id = oldList[oldList.length - 1]
        ? oldList[oldList.length - 1].id + 1
        : 0;
      return [
        ...oldList,
        {
          id: id,
          data: { title: title, desc: desc, status: false },
        },
      ];
    });
  }

  function removeItem(id) {
    updateList((oldList) => {
      for (var i in oldList) {
        if (oldList[i].id === id) {
          oldList.splice(i, 1);
        }
      }
      return [...oldList];
    });
    updateMessage({
      title: "Info: Item deleted successfully!",
      note: "Item was successfully deleted from the list.",
      type: "info",
    });
  }

  function messageCloseHandler() {
    updateMessage();
  }

  return (
    <div className="to-do">
      <h1 className="to-do-title">To do list</h1>
      {message && (
        <Message
          title={message.title}
          note={message.note}
          type={message.type}
          onMessageClose={messageCloseHandler}
        ></Message>
      )}
      <NewItem onAddNew={addNewItem} />
      <List
        items={list}
        onStatusUpdate={statusUpdateHandler}
        onItemDelete={removeItem}
      />
    </div>
  );
}

export default App;

/*
  const idSort = (a, b) => {
    return a.id > b.id
      ? 1
      : a.id < b.id
      ? -1
      : 0;
  };

  const statusSort = (a, b) => {
    return a.data.status === b.data.status ? 0 : a.data.status ? -1 : 1;
  }; 

  const titleSort = (a, b) => {
    return a.data.title > b.data.title
      ? 1
      : a.data.title < b.data.title
      ? -1
      : 0;
  };*/
