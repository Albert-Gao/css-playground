import React from "react";
import "./App.css";

function SideBar() {
  return (
    <div className="border sidebar">
      <div className="logo">ClientPro</div>

      <div>dashboard</div>
      <div>customer</div>
      <div>reports</div>
      <div>statics</div>
      <div>settings</div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="border app">2</div>
    </div>
  );
}

export default App;
