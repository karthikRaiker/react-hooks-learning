import React, { useState, useEffect } from "react";
import axios from "axios";

function NormalFetch() {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/5")
      .then((response) => {
        setLoad(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoad(false);
        setPost({});
        setError("Something went wrong!!!");
      });
  }, []);

  return (
    <div className="Container flex-column">
      <div className="White center bold">useState Fetch</div>
      {load ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default NormalFetch;
