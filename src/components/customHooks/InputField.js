import React from "react";
import useInput from "../../customHooks/useInput";

function InputField() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" {...bindLastName} />
        </div>
        <button className="btn btn-width">Submit</button>
      </form>
    </div>
  );
}

export default InputField;
