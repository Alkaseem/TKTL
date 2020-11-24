import React from "react";

import "./Notifiacation.css";

function Notifiactions({ message, setMessage }) {
  setTimeout(() => {
    setMessage("");
  }, 2000);
  return (
    <div>
      <h2 className={`alert ${message.alert}`}>{message.msg}</h2>
    </div>
  );
}

export default Notifiactions;
