import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/contact/Contact";
import Room from "./pages/room/Room";
import Team from "./pages/Team/Team";
// import Home2 from "./pages/Home2";
import RoomSapphire from "./pages/room/RoomSapphire";
import BlogDetails from "./pages/Blog/BlogDetails";
import Preloader from "./components/Preloader";
import './App.css'
import Faq from "./features/Faq";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/Home2" element={<Home2 />} /> */}
              <Route path="/room" element={<Room />} />
              <Route path="/about" element={<About />} />
              <Route path="/room/:roomName" element={<RoomSapphire />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogName" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </Router>
    
          {/* Footer */}
          <footer>
            <div className="Footer">
              <div className="footer-img">
                <div>
                  <img
                    src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67887ed3b760263c9d576611_Logo%20White.png"
                    alt="logo"
                  />
                </div>
                <div>
                  <p>
                    Discover elegance beyond compare, <br /> Where every detail
                    is extraordinary, <br /> Your luxury escape begins here.
                  </p>
                </div>
              </div>

              <div className="section2">
                <h1>Pages</h1>
                <p><a href="/">Home</a></p>
                <p><a href="/about">About</a></p>
                <p><a href="/room">Rooms</a></p>
                <p><a href="/blog">Blog</a></p>
                <p><a href="/contact">Contact</a></p>
                <p><a href="/team">Team</a></p>
              </div>

              <div className="utility-pages">
                <h1>Utility Pages</h1>
                <p><a href="#">Password Protected</a></p>
                <p><a href="#">404 Not Found</a></p>
                <p><a href="#">Style Guide</a></p>
                <p><a href="#">Changelog</a></p>
                <p><a href="#">Licenses</a></p>
              </div>

              <div>
                <h1>Other Pages</h1>
                <p><a href="/room/roomDetails">Room Details</a></p>
                <p><a href="/blog/blogDetails">Blog Details</a></p>
              </div>
            </div>

            <div style={{ color: "white" }}>
              <hr />
            </div>
            <div
              className="copyright"
              style={{
                color: "white",
                display: "flex",
                paddingBottom: "20px",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <p>© 2025 Luxorefi.</p>
              <p>Designed by Adun Oyinkansola</p>
              <p>Powered by Adunola</p>
            </div>
          </footer>
        </div>
      )}
  
    </div>
  );
}

export default App;
