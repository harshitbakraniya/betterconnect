import React, { useState } from "react";
import "./TeacherRegistration.css";
import ImgRegister from "../../assets/images/registerImg.svg";
import Pattern from "../../assets/images/pattern.svg";
import Black from "../../assets/images/black.svg";
import Header from "../../components/Header/Header";
import PaperPattern from "../../assets/images/paper-plane 1.svg";
import EditComponent from "../../components/editComponent/EditComponent";

const TeacherRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: 0,
    email: "",
    mobile: "",
    experience: 0,
    currentlyAssociated:""
  });
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadios = (e) => {
    let ele = document.querySelector(".associate-active");
    console.log(ele);
    ele.placeholder = e.target.value;
    ele.style.display = "block";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const data = [
    {
      id: 1,
      class: "10th",
      subject: "Maths",
      board: "CBSE",
      fees: "10000",
      time: "10-11PM",
      batch_size: "10-20",
      mode: "offline",
    },
    {
      id: 2,
      class: "11th",
      subject: "Maths",
      board: "CBSE",
      fees: "10000",
      time: "10-11PM",
      batch_size: "10-20",
      mode: "offline",
    },
    {
      id: 3,
      class: "12th",
      subject: "Maths",
      board: "CBSE",
      fees: "10000",
      time: "10-11PM",
      batch_size: "10-20",
      mode: "offline",
    },
  ];
  return (
    <>
      <Header backColor="#FFFFFF" />
      <section className="register-form">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-12 col-md-12 col-lg-6 left">
              <div className="title">
                <img src={Black} alt="pattern" />
                <span className="content">
                  Register as<span className="color-text">Teacher</span> or
                </span>
                <span className="color-text">Institute</span>
              </div>
              <img src={ImgRegister} alt="" />
            </div>
            <img src={PaperPattern} alt="" className="paper-plane" />
            <div className="col-12 col-md-12 col-lg-6 right">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    placeholder="Full Name"
                    onInput={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    aria-describedby="emailHelp"
                    placeholder="Address"
                    onInput={handleInput}
                  />
                </div>
                <div className="row justify-content-between align-items-center">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      aria-describedby="emailHelp"
                      placeholder="City"
                      onInput={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Pincode
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pincode"
                      name="pincode"
                      aria-describedby="emailHelp"
                      placeholder="Pincode"
                      onInput={handleInput}
                    />
                  </div>
                </div>
                <div className="row justify-content-between align-items-center">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      onInput={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Mobile No.
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      aria-describedby="emailHelp"
                      placeholder="Mobile No."
                      onInput={handleInput}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="examp" className="form-label">
                    Qualification
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="Qualification"
                  />
                  <label
                    className="form-control file-input d-flex align-items-center justify-content-between"
                    htmlFor="profile"
                  >
                    <label className="inner-place p-0 m-0">Qualification</label>
                    <button className="btn" for="profile">
                      Browse
                    </button>
                  </label>
                </div>
                <div className="row justify-content-between align-items-center">
                  <div className="form-group col-12">
                    <label htmlFor="name" className="form-label">
                      Teaching Experience
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="experience"
                      name="experience"
                      aria-describedby="emailHelp"
                      placeholder="Teaching Experience"
                      onInput={handleInput}
                    />
                  </div>
                  <div className="form-group col-12">
                    <label htmlFor="examp" className="form-label">
                      Profile Picture
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="profile"
                    />
                    <label
                      className="form-control file-input d-flex align-items-center justify-content-between"
                      htmlFor="profile"
                    >
                      <label className="inner-place p-0 m-0">
                        Profile Picture
                      </label>
                      <button className="btn" for="profile">
                        Browse
                      </button>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Currently Associate with</label>
                  <div className="row align-items-center">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="associate"
                        id="inlineRadio1"
                        value="School"
                        onChange={handleRadios}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        School
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="associate"
                        id="inlineRadio2"
                        value="Institue"
                        onChange={handleRadios}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Institue
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="associate"
                        id="inlineRadio3"
                        value="Both"
                        onChange={handleRadios}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        Both
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control associate-active"
                    id="address"
                    name="currentlyAssociated"
                    aria-describedby="emailHelp"
                    placeholder=""
                    onInput={handleInput}
                    style={{display:"none"}}
                  />
                </div>
                <input type="submit" value="Submit" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="batch-detail">
        <div className="title">
          <img src={Black} alt="pattern" />
          <span className="content">
            Batch<span className="color-text">Details</span>
          </span>
        </div>
        <div className="table-content">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Subject</th>
                <th scope="col">Board</th>
                <th scope="col">Fees</th>
                <th scope="col">Time</th>
                <th scope="col">Batch Strength</th>
                <th scope="col">Mode</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return <EditComponent key={item.id} value={item} />;
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TeacherRegistration;
