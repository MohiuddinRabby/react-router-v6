import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogsDetails = () => {
  const [singleBlogPost, setSingleBlogPost] = useState({});
  const { blogId } = useParams();
  //instead of useHistory(useNavigate)
  const navigate = useNavigate();
  const goBackToPosts = () => {
    navigate("/blogs");
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      .then((response) => response.json())
      .then((json) => setSingleBlogPost(json));
  }, [blogId]);
  return (
    <div className="mt-5 bg-light p-2">
      <h4>
        Title: <br /> {singleBlogPost?.title}
      </h4>
      <h4 className="py-5">
        Details: <br /> {singleBlogPost?.body}
      </h4>
      <button onClick={goBackToPosts} className="btn btn-primary btn-sm">
        go to posts
      </button>
    </div>
  );
};

export default BlogsDetails;
