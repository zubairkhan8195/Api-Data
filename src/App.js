import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import EditUser from "./components/EditUser";

import Read from "./components/Read";
import GetAxios from "./GetAxios";
import PostAxios from "./PostAxios";

function App() {
  return (
    <div className="container">
      {/* <GetAxios/> */}
      {/* <PostAxios/> */}
      {/* <Create/> */}
      <Routes>
        <Route exact path="/" element={<Read />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/users/:userId/edit" element={<EditUser />}></Route>
        <Route exact path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
