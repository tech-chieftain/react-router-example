import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  console.log(postId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPost(data)
      });

  }, [postId]);

  return (
    <div>
      <Link to={`/about`}>About</Link>
      {post.body}
    </div>
  );
};

export default PostPage;
