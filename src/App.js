import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
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

  const [title, setTitle] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Заголовок поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
