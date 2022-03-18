import React from "react";
import SideBar from "./pages/SideBar";
import Contents from "./pages/Contents";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Contents />
    </div>
  );
};

export default App;
