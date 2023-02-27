import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();

  function getUser(id) {
    axios
      .get(`https://63fc42c4859df29986b923ff.mockapi.io/crud/${id}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      });
  }

  useEffect(() => {
    getUser(userId);
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://63fc42c4859df29986b923ff.mockapi.io/crud/${userId}`, {
        e_name: user.e_name,
        e_email: user.e_email,
        e_age: user.e_age,
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="mt-5 mb-3">
            <Link to="/">
              <button className="btn btn-primary  ">Read Data</button>
            </Link>
          </div>
          <div className="bg-primary p-4 text-center">
            <h1>Update Data</h1>
          </div>
          {user && (
            <form onSubmit={handlerSubmit}>
              <div className="form-group mt-4">
                <label className="pb-1">Enter Name :</label>
                <input
                  type="text"
                  value={user.e_name}
                  onChange={(e) => setUser({ ...user, e_name: e.target.value })}
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-2">
                <label className="pb-1">Enter Age :</label>
                <input
                  type="number"
                  value={user.e_age}
                  onChange={(e) => setUser({ ...user, e_age: e.target.value })}
                  placeholder="Age"
                  className="form-control"
                />
              </div>
              <div className="form-group mt-2">
                <label className="pb-1">Enter Email :</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={user.e_email}
                  onChange={(e) =>
                    setUser({ ...user, e_email: e.target.value })
                  }
                />
              </div>
              <br />
              <div className="d-grid">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default EditUser;
