import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function AddForm() {
  const [num, setNum] = useState(0);
  const [sum, setSum] = useState(0);

  function inputReceive(e) {
    setNum(e.target.value);
  }
  function addNum(num) {
    return num;
  }

  return (
    <div>
      <input type="text" onChange={inputReceive} />
      <button>Add</button>
    </div>
  );
}

const el = <AddForm />;
ReactDOM.render(el, document.getElementById("root"));
