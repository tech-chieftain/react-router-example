import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import PageComponent from "./components/PageComponent";
import PostsPage from "./routes/PostsPage";
import PostPage from "./routes/PostPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav
        style={{
          background: "#aaf3cd",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0", marginLeft: "10px" }}>React Router</h1>
        <ul className="list">
          <li className="list-item">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
              to="/posts"
            >
              Posts
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
              to="/contactus"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "",
                };
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route
          path="/about"
          element={
            <PageComponent backgroundColor={"#aaf3cd"} text="About page" />
          }
        />
        <Route
          path="/contactus"
          element={
            <PageComponent backgroundColor={"#cdaaf3"} text="Contact Us page" />
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
