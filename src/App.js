import { useState } from "react";
import PostList from "./components/PostList";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "Description",
    },
    {
      id: 2,
      title: "JavaScript2",
      body: "Description2",
    },
    {
      id: 3,
      title: "JavaScript3",
      body: "Description3",
    },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
