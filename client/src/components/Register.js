import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { useState, useEffect } from "react";

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [contactNo, setcontactNo] = useState("");
  const [clubOrCountry, setclubOrCountry] = useState("");
  const register = () => {
    Axios.post("http://localhost:5000/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNo: contactNo,
      clubOrCountry: clubOrCountry
    }).then(response => {
      console.log(response);
    });
  };

  return (
    <Container>
      <Content>
        <Text>Register</Text>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputFirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFirstName"
              placeholder="Enter First Name"
              onChange={e => {
                setfirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              placeholder="Enter Last Name"
              onChange={e => {
                setlastName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => {
                setemail(e.target.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputContactNo">Contact Number</label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              class="form-control"
              id="exampleInputContactNo"
              placeholder="Contact Number"
              onChange={e => {
                setcontactNo(e.target.value);
              }}
            />
            <small id="ContactNoHelp" className="form-text text-muted">
              Enter your Telephone Number(in format of xxx-xxx-xxxx)
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputContactNo">
              Name of football club/country you support
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputClub"
              placeholder="Club/Country Name"
              onChange={e => {
                setclubOrCountry(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={register}>
            Submit
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default Register;

const Container = styled.div``;

const Content = styled.div`
  width: 100%;
`;

const Text = styled.div`
  font-weight: 800;
  font-size: 40px;
  text-align: center;
`;
