import React from "react";
import styled from "styled-components";

const Register = () => {
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              placeholder="Enter Last Name"
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
              class="form-control"
              id="exampleInputContactNo"
              placeholder="Contact Number"
              required
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
            />
          </div>
          <button type="submit" className="btn btn-primary">
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
