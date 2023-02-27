import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
function GetAxios() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      {posts.map((poste) => (
        <div key={poste.id}>
          <h1>{poste.id}</h1>
          <h1>{poste.title}</h1>
          <h1>{poste.body}</h1>
        </div>
      ))}
    </div>
  );
}

export default GetAxios;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// function Posts() {
//   const [fetchData, setFetchData] = useState(false);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     if (fetchData) {
//       setPosts([]);
//       axios.get(baseURL).then((response) => {
//         setPosts(response.data);
//         setFetchData(false);
//       });
//     }
//   }, [fetchData]);

//   return (
//     <div>
//       {fetchData === false && (
//         <button onClick={() => setFetchData(true)}>Load Posts</button>
//       )}
//       {fetchData === true && <p>Data is Loading</p>}
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h1>{post.id}</h1>
//           <h2>{post.title}</h2>
//           <h3>{post.body}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Posts;
