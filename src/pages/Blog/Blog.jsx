import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const [sections, setSections] = useState({ section1: [], section2: [] });

  useEffect(() => {
    document.title = "Blog | Luxorefi ";

    fetch("/blogData.json")
      .then((res) => res.json())
      .then((data) => setSections(data))
      .catch((err) => console.error("Error loading blog data:", err));
  }, []);

  return (
    <>
      <div className="blog-page">
        <Navbar />
        <div className="text">
          <p>OUR BLOG</p>
          <h1>Hotel News & Articles</h1>
        </div>
      </div>

      {/* Section 1 */}
      <section className="log">
        <div className="blogs">
          {sections.section1.map((blog) => (
            <div key={blog.id} className="blog1">
              <a href={blog.link}>
                <img src={blog.image} alt={blog.title} />
              </a>
              <div className="blog-text">
                <p>{blog.category}</p>
                <p>{blog.date}</p>
              </div>
          <p className="blog-p" onClick={() => navigate(blog.link)}>
                    <a href={blog.link}>{blog.title}</a>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section className="log">
        <div className="blogs">
          {sections.section2.map((blog) => (
            <div key={blog.id} className="blog1">
              <a href={blog.link}>
                <img src={blog.image} alt={blog.title} />
              </a>
              <div className="blog-text">
                <p>{blog.category}</p>
                <p>{blog.date}</p>
              </div>
              <h1 className="blog-p">
                <a href={blog.link}>{blog.title}</a>
              </h1>
            </div>
          ))}
        </div>
      </section>

      {/* sec 3 */}
      <section className="log">
        <div className="blogs">
          {sections.section3?.map((blog) => (
            <div key={blog.id} className="blog1">
              <a href={blog.link}>
                <img src={blog.image} alt={blog.title} />
              </a>
              <div className="blog-text">
                <p>{blog.category}</p>
                <p>{blog.date}</p>
              </div>
              <h1 className="blog-p">
                <a href={blog.link}>{blog.title}</a>
              </h1>
            </div>
          ))}
        </div>
      </section>


            <section className="log">
        <div className="blogs">
          {sections.section4?.map((blog) => (
            <div key={blog.id} className="blog1">
              <a href={blog.link}>
                <img src={blog.image} alt={blog.title} />
              </a>
              <div className="blog-text">
                <p>{blog.category}</p>
                <p>{blog.date}</p>
              </div>
              <h1 className="blog-p">
                <a href={blog.link}>{blog.title}</a>
              </h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
