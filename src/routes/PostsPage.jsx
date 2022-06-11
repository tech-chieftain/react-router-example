import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
