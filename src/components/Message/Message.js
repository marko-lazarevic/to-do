import "./Message.css";

function Message(props) {
  return (
    <div className="message" onClick={props.onMessageClose}>
      <div className={`message-box ${props.type}`}>
        <h3 className="title">{props.title}</h3>
        <p className="note">{props.note}</p>
        <p className="close">Click anywhere to close</p>
      </div>
    </div>
  );
}

export default Message;
