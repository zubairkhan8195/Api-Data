// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Edit() {

//   const [id, setId] = useState(0);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const navigate = useNavigate();
   
//   useEffect(() => {
//      setId(localStorage.getItem('id'));
//      setName(localStorage.getItem('name'));
//      setAge(localStorage.getItem('age'));
//      setEmail(localStorage.getItem('email'));
//   }, [])
//   const handlerSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`https://63fc42c4859df29986b923ff.mockapi.io/crud/${id}`,{
//       e_name: name,
//       e_email: email,
//       e_age: age,
//     }).then(() => {
//         navigate('/')
//     }).catch((error) => {
//       console.log(error);
//     })

//   }
  

//   return (
//     <>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="mt-5 mb-3">
//             <Link to='/'>
//               <button className="btn btn-primary  ">Read Data</button>
//             </Link>
//           </div>
//           <div className="bg-primary p-4 text-center">
//             <h1>Update Data</h1>
//           </div>
//           <form onSubmit={handlerSubmit}>
//             <div className="form-group">
//               <label htmlFor="">Enter Name:</label>
//               <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="form-control" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="">Enter Age:</label>
//               <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="form-control" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="">Enter Email:</label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="form-control"
//                 value={email} onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <br />
//             <div className="d-grid">
//               <input type="submit" value="Update" className="btn btn-primary" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Edit;
