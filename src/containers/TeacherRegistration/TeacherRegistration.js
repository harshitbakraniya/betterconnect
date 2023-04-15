import React, { useState } from "react";
import "./TeacherRegistration.css";
import ImgRegister from "../../assets/images/registerImg.svg";
import Black from "../../assets/images/black.svg";
import Header from "../../components/Header/Header";
import PaperPattern from "../../assets/images/paper-plane 1.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const TeacherRegistration = () => {
  const stateData = useSelector((state) => state.teacherRedu);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query"));
  const [formData, setFormData] = useState({
    teacherId: 0,
    name: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: 0,
    phone: "",
    qualification: "",
    gender: "",
    experience: 0,
    currentlyAssociated: "",
    userId: 0,
    document: "",
    image: "",
    bio: "",
  });
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleRadios = (e) => {
    let ele = document.querySelector(".associate-active");
    console.log(ele);
    ele.placeholder = e.target.value;
    ele.style.display = "block";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateData.isValidOrNot.result) {
      toast.error(stateData.isValidOrNot.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let data = new FormData(e.target);
      let allData = Object.fromEntries(data.entries());
      console.log(allData);
      // dispatch(setTeacherRegistration(allData));
      // navigate("/betterconnect/batchdetail");
    }
  };

  return (
    <>
      <Header backColor="#FFFFFF" />
      <ToastContainer />
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
                    required
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
                    required
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
                      required
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
                      required
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
                      required
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
                      name="phone"
                      aria-describedby="emailHelp"
                      placeholder="Mobile No."
                      onInput={handleInput}
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-between align-items-center">
                  <div className="form-group">
                    <label className="form-label">
                      Qualification (optional)
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      name="qualification"
                      id="Qualification"
                      // required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          qualification: e.target.files[0],
                        })
                      }
                    />
                    <label
                      className="form-control file-input d-flex align-items-center justify-content-between"
                      htmlFor="profile m-0"
                    >
                      <label className="inner-place p-0 m-0">
                        Qualification
                      </label>
                      <label
                        className="btn m-0"
                        for="profile"
                        htmlFor="Qualification"
                      >
                        Browse
                      </label>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <select
                      className="custom-select"
                      id="inputGroupSelect01"
                      name="gender"
                      // onChange={handleInput}
                    >
                      <option selected value="Male">
                        Male
                      </option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
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
                      required
                      aria-describedby="emailHelp"
                      placeholder="Teaching Experience"
                      onInput={handleInput}
                    />
                  </div>
                  <div className="form-group col-12">
                    <label className="form-label d-flex align-items-center">
                      Profile Picture (optional)
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      name="image"
                      id="profile"
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.files[0] })
                      }
                    />
                    <label
                      className="form-control m-0 file-input d-flex align-items-center justify-content-between"
                      htmlFor="profile"
                    >
                      <label className="inner-place p-0 m-0" htmlFor="profile">
                        Profile Picture
                      </label>
                      <label className="btn m-0" htmlFor="profile">
                        Browse
                      </label>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Currently Associate with (optional)
                  </label>
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
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="associate"
                        id="inlineRadio4"
                        value="None"
                        // onChange={handleRadios}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio4"
                      >
                        None
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
                    style={{ display: "none" }}
                  />
                </div>
                <input type="submit" value="Next" className="btn submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherRegistration;
