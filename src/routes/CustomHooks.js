import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import CounterOne from "../components/customHooks/CounterOne";
import CounterTwo from "../components/customHooks/CounterTwo";
import InputField from "../components/customHooks/InputField";
import UpdateTitleOne from "../components/customHooks/UpdateTitleOne";
import UpdateTitleTwo from "../components/customHooks/UpdateTitleTwo";
import "../css/pages.css";

function CustomHooks() {
  return (
    <>
      <div className="CustomHooks">
        <Link to="/">
          <span className="BackArrow">
            <FiArrowLeft />
          </span>
        </Link>
        <div className="Page-Heading">CustomHooks Hook (Update Title Demo)</div>
        <UpdateTitleOne />
        <UpdateTitleTwo />
        <div className="Container flex-column">
          <div className="Page-Heading border-top">
            CustomHooks Hook (Update Counter Demo)
          </div>
          <CounterOne />
          <CounterTwo />
        </div>
        <div className="Container flex-column">
          <div className="Page-Heading border-top">
            CustomHooks Hook (Input Field Demo)
          </div>
          <InputField />
        </div>
      </div>
    </>
  );
}

export default CustomHooks;
