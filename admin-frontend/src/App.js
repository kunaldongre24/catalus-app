import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import "./style/index.css";
import "./style/App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1328);

  const closeModal = () => {
    const element = document.getElementsByClassName("modal");
    element[0].style.display = "none";
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1328;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <div className="App">
      <div className="modal">
        <div className="modal-body">
          <div className="modalcontent"></div>
        </div>
      </div>
      <Router>
        <Sidebar closed={isMobile} />
        <Content />
      </Router>
    </div>
  );
}

export default App;
