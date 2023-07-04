import React, { useState } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* Name Input */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name="name" value={values.name} onChange={handleChange} className="form-input"/>
          <button type="submit" className="btn btn-block">Login</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
