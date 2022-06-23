import "./App.css";
import logo from "./instagram_logo.png";
import Post from "./Post.js";
import { useEffect, useState } from "react";
import { db } from "./firebase.js";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      // 새로운 포스트가 추가될때마다 이 코드가 발동됨.
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            post: doc.data(),
          };
        })
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={logo} alt="" />
      </div>

      {posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
