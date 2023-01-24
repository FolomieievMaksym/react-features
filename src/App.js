import React, { useState } from "react";
import Post from "./components/Post";
import "./styles/Null.scss";
import "./styles/App.scss";

const App = function () {
   let [posts, setPost] = useState([
      { id: 1, title: "JS", text: "Text", btn1: "Save", btn2: "Delete" },
      { id: 2, title: "TS", text: "Text", btn1: "Save", btn2: "Delete" },
      { id: 3, title: "Python", text: "Text", btn1: "Save", btn2: "Delete" },
   ]);

   return (
      <div className="App">
         <h2 style={{ fontSize: "2em", textAlign: "center", marginBottom: "20px" }}>Posts list</h2>
         {posts.map((post) => (
            <Post post={post} key={post.id} />
         ))}
      </div>
   );
};

export default App;
