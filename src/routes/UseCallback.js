import React, { useCallback, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/useCallback/Button";
import Count from "../components/useCallback/Count";
import Text from "../components/useCallback/Text";

function UseCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <div className="UseCallback">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">
          useCallback Hook Demo (used for performance optimization)
        </div>
        <div className="border-top" style={{ marginTop: "1rem" }}>
          <Text />
          <Count text={"Age"} count={age} />
          <Button handleIncrement={incrementAge}>Increment Age</Button>
          <Count text={"Salary"} count={salary} />
          <Button handleIncrement={incrementSalary}>Increment Salary</Button>
        </div>
      </div>
    </>
  );
}

export default UseCallback;
