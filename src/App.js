import React, { useState } from "react";
import "./styles/Null.scss";
import "./styles/App.scss";
import PostsList from "./components/PostsList";

const App = function () {
   let [posts, setPost] = useState([
      { id: 1, title: "JS", text: "Text", btn1: "Save", btn2: "Delete" },
      { id: 2, title: "TS", text: "Text", btn1: "Save", btn2: "Delete" },
      { id: 3, title: "Python", text: "Text", btn1: "Save", btn2: "Delete" },
   ]);
   let [posts2, setPost2] = useState([
      { id: 4, title: "JS", text: "Text", btn1: "Save", btn2: "Delete" },
      { id: 5, title: "TS", text: "Text", btn1: "Save", btn2: "Delete" },
      { id: 6, title: "Python", text: "Text", btn1: "Save", btn2: "Delete" },
   ]);
   return (
      <div className="App">
         <PostsList posts={posts} title={"First title"} />
         <PostsList posts={posts2} title={"Second title"} />
      </div>
   );
};

export default App;
