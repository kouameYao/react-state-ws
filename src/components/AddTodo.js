import React, { useState } from "react";

const AddTodo = ({ handleAdd }) => {
  const [desc, setDesc] = useState("");

  return (
    <div className="row mt-3">
      <div className="col-md-10">
        <input
          type="text"
          value={desc}
          className="form-control"
          onChange={(event) => setDesc(event.target.value)}
        />
      </div>

      <div className="col-md-2">
        <img
          style={{ width: `25px` }}
          src={require("../assets/ic_add.png")}
          alt="add"
          onClick={() => {
            handleAdd({
              id: Date.now(),
              description: desc,
              done: false,
            });
            setDesc("");
          }}
        />
      </div>
    </div>
  );
};

export default AddTodo;
