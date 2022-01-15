import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import Contact from "./Contact/Contact";
import Blogs from "./Blogs/Blogs";
import BlogsDetails from "./Blogs/BlogsDetails";
import NotFound from "./NotFound/NotFound";
import Courses from "./Courses/Courses";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 mt-5">
          <Nav />
        </div>
        <div className="col-md-10 mt-5">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:blogId" element={<BlogsDetails />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/courses"
                element={
                  <PrivateRoute>
                    <Courses />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                }
              />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
