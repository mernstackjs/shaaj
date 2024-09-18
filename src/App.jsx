import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Details from "./Details";

export default function App() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/profile"}>profile</Link>
        <Link to={"/content"}>content</Link>
        <Link to={"/details/122/ahmed"}>Details</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/profile" element={<div>Home profile</div>} />
        <Route path="/login" element={<div>Home Login</div>} />
        <Route path="/content" element={<div>Home Content</div>} />
        <Route path="/details/:id/:name" element={<Details />} />
      </Routes>
    </div>
  );
}
