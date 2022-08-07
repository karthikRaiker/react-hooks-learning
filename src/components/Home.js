import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "./Result";
import { Link } from "react-router-dom";

function Home() {
  const [btn, setBtn] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    handleApiCall();
  }, []);

  const handleApiCall = () => {
    axios
      .get("https://restcountries.com/v3.1/name/ind")
      .then((res) => {
        setBtn(true);
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((err) => err);
  };

  return (
    <div style={{ color: "white" }}>
      {response && <Link to="/result">submit</Link>}
    </div>
  );
}

export default Home;
