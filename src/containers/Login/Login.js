import React, { useState } from "react";
import "./Login.css";
import ImgRegister from "../../assets/images/registerImg.svg";
import Black from "../../assets/images/black.svg";
import Header from "../../components/Header/Header";
import PaperPattern from "../../assets/images/paper-plane 1.svg";
import EditComponent from "../../components/editComponent/EditComponent";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({email: "", password: ""});
  };

  return (
    <>
      <Header backColor="#FFFFFF" />
      <section className="login-form">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-12 col-lg-6 left">
              <div className="title">
                <img src={Black} alt="pattern" />
                <span className="content">
                  Sign<span className="color-text">In</span>
                </span>
              </div>
              <img src={ImgRegister} alt="" />
            </div>
            <img src={PaperPattern} alt="" className="paper-plane" />
            <div className="col-12 col-md-12 col-lg-6 right">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                    value={formData.email}
                    onInput={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    aria-describedby="emailHelp"
                    placeholder="Password"
                    onInput={handleInput}
                  />
                </div>
                <input type="submit" value="Submit" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
