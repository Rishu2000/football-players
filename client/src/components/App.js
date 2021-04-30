import React from "react";
// import styled from "styled-components";
import Register from "../components/Register";
import "../styles/App.css";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default App;
