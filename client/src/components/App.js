import React from "react";
// import styled from "styled-components";
import Register from "../components/Register";
import LogIn from "../components/LogIn";
import "../styles/App.css";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <Register />
        </div>
        <div className="col-6">
          <LogIn />
        </div>
      </div>
    </div>
  );
};

export default App;

// const Register = styled.div``;

// const LogIn = styled.div``;
