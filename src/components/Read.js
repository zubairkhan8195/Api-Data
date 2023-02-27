import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  function getData() {
    setLoading(true);
    axios
      .get("https://63fc42c4859df29986b923ff.mockapi.io/crud")
      .then((response) => {
        setLoading(false);
        // console.log(response)
        setApiData(response.data);
      });
  }

  function handlerDelete(id) {
    axios
      .delete(`https://63fc42c4859df29986b923ff.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function setDataStorage(id, name, age, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mt-5 mb-3">
            <Link to="/create">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          {loading === true && <p>Data Loading....</p>}
          {apiData.length > 0 && (
            <table className="table table-bordered table-striped table-dark table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>EMAIL</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                        <Link to={`/users/${item.id}/edit`}>
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (window.confirm("Are You Sure Delete Date ??")) {
                              handlerDelete(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Read;
