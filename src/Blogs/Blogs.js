import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setBlogData(json.slice(0, 5)));
  }, []);
  return (
    <div className="mt-5 bg-light p-2">
      {blogData?.map((blog) => (
        <div key={blog?.id}>
          <h5>{blog?.body}</h5>
          <Link
            to={`/blogs/${blog?.id}`}
            className="btn btn-primary btn-sm mt-3"
          >
            Details
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
