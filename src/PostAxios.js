import axios from "axios";
import React, { useState } from "react";

function PostAxios() {
  const [myTitle, setMyTitle] = useState("");
  const [myBody, setMyBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts",
    {
        title:myTitle,
        body: myBody
    })
    .then((response) => {
        console.log(response)
    }).catch((error)=>{
        console.log(error);
    })
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <label htmlFor="">Enter Title:</label>
      <input
        type="text"
        name="title"
        value={myTitle}
        onChange={(e) => setMyTitle(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="">Enter Title:</label>
      <input
        type="text"
        name="body"
        value={myBody}
        onChange={(e) => setMyBody(e.target.value)}
      />
      <br />
      <br />
      <input type="submit" value="Post" />
    </form>
  );
}

export default PostAxios;
