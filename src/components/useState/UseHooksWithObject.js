import React, { useState } from "react";

function UseHooksWithObject() {
  const [field, setField] = useState({ fname: "", lname: "" });

  const handleField = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  return (
    <div className="Container">
      <form>
        <input
          type="text"
          name="fname"
          placeholder="Enter FirstName"
          value={field.fname}
          onChange={handleField}
        />
        <input
          type="text"
          name="lname"
          placeholder="Enter LastName"
          value={field.lname}
          onChange={handleField}
        />
        <div className="White" style={{ margin: "0.5rem 0" }}>
          Fist Name is : {field.fname}
        </div>
        <div className="White" style={{ margin: "0.5rem 0" }}>
          Last Name is : {field.lname}
        </div>
        <div className="White">{JSON.stringify(field)}</div>
      </form>
    </div>
  );
}

export default UseHooksWithObject;
