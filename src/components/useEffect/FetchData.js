import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [post, setPost] = useState({});
  const [number, setNumber] = useState(1);
  const [clickbtn, setClickBtn] = useState(1);
  const [toggle, setToggle] = useState(true);
  //   const [result, setResult] = useState([])

  useEffect(() => {
    if (toggle) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then((res) => {
          console.log(res.data);
          setPost(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${number}`)
        .then((res) => {
          console.log(res.data);
          setPost(res.data);
        })
        .catch((err) => console.log(err));
    }
    // setResult(result=post)
  }, [toggle, clickbtn]);

  const handleInput = (e) => {
    setNumber(([e.target.name] = e.target.value));
  };

  const handleBtn = () => {
    setClickBtn(number);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{ fontWeight: "bold" }} className="Container flex-column">
      <div
        className="White"
        style={{ textAlign: "center", margin: "1.5rem 0" }}
      >
        {toggle ? "FetchData" : "Get Particular Data"}
      </div>
      <button className="btn btn-width" onClick={handleToggle}>
        {toggle ? "Get Particular Data" : "FetchData"}
      </button>
      {toggle ? (
        <ul>
          {post.length
            ? post.map((item) => {
                return (
                  <li className="White" key={item.id}>
                    {item.title}
                  </li>
                );
              })
            : null}
        </ul>
      ) : (
        <div>
          <div className="Container">
            <input
              type="number"
              value={number}
              name="number"
              placeholder="enter id"
              onChange={handleInput}
              style={{ width: "50%" }}
            />
            <button className="btn" onClick={handleBtn}>
              Get Data
            </button>
          </div>
          <ul className="White">{post.title}</ul>
        </div>
      )}
    </div>
  );
}

export default FetchData;
