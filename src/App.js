import "./App.css";
import Header from "./components/Header/Header";
import * as React from "react";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Blogs from "./components/MyBlogs/Blogs";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className="buffer"></div>
      <Skills />
      <div className="buffer"></div>
      <Blogs />
      <div className="buffer"></div>
      <Resume />
      <div className="buffer"></div>
      <Contact />
      <div style={{color:"grey", marginLeft:"10px", padding:"5px", marginBottom:"10px"}}>v1.0</div>
    </div>
  );
}

export default App;
