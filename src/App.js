import React, { useState } from "react";
import "./styles/Null.scss";
import "./styles/App.scss";
import "./styles/Post-item.scss";
import PostList from "./components/PostList";

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: `JS 1`, body: `About JS` },
      { id: 2, title: `JS 2`, body: `About JS` },
      { id: 3, title: `JS 3`, body: `About JS` },
   ]);
   return (
      <div className="App">
         <PostList posts={posts} title={"About This Staff"} />
      </div>
   );
}

export default App;
