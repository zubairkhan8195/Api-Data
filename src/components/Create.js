import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://63fc42c4859df29986b923ff.mockapi.io/crud", {
        e_name: name,
        e_email: email,
        e_age: age,
      })
      .then(() => {
        navigate("/");
      }).catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="mt-5 mb-3">
            <Link to="/">
              <button className="btn btn-primary">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-4">
              <label htmlFor="">Enter Name :</label>
               <br />
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="">Enter Age :</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="">Enter Email :</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
