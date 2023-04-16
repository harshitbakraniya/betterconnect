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
import {
  isEmailorPhoneAlreadyexist,
  setTeacherRegistration,
} from "../../Redux/actions/teacherAction";
import { all } from "axios";

const TeacherRegistration = () => {
  const stateData = useSelector((state) => state.teacherRedu);
  const [document, setDocument] = useState();
  const [picture, setPicture] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    gender: "",
    address: "",
    city: "",
    pincode: 0,
    phone: "",
    qualification: "",
    experience: 0,
    currentlyAssociated: "",
    schoolName: "",
    instituteName: "",
    document: "",
    image: "",
    bio: "",
  });
  const handleInput = async (e, file) => {
    if (file) {
      if (e.target.name === "image") {
        window.document.getElementById("picture").textContent =
          e.target.files[0].name;
      } else {
        window.document.getElementById("document-file").textContent =
          e.target.files[0].name;
      }
      await getBase64(e.target.files[0], e.target.name);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  async function getBase64(file, targetName) {
    // var reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = function () {
    //   setFormData({ ...formData, [targetName]: reader.result });
    // };
    // reader.onerror = function (error) {
    //   console.log("Error: ", error);
    // };
    // const buffer = await file.arrayBuffer();
    // let byteArray = new Int8Array(buffer);
    // setFormData({ ...formData, [targetName]: byteArray });

    const reader = new FileReader();

    reader.onload = function (event) {
      const fileData = event.target.result;
      const byteArray = new Uint8Array(fileData);
      const base64String = btoa(String.fromCharCode.apply(null, byteArray));
      setFormData({ ...formData, [targetName]: base64String });
    };

    reader.readAsArrayBuffer(file);
  }

  const handleRadios = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let ele = window.document.querySelector(".school-active");
    let ele1 = window.document.querySelector(".institute-active");
    console.log(e.target.value);
    switch (e.target.value) {
      case "none":
        ele.style.display = "none";
        ele1.style.display = "none";
        break;
      case "Both":
        ele.style.display = "block";
        ele.placeholder = "School";
        ele1.style.display = "block";
        ele1.placeholder = "Institute";
        break;
      case "School":
        ele.placeholder = "School";
        ele.style.display = "block";
        ele1.style.display = "none";
        break;
      case "Institute":
        ele1.placeholder = "Institute";
        ele1.style.display = "block";
        ele.style.display = "none";

        break;
      default:
        console.log("error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, phone } = formData;
    dispatch(isEmailorPhoneAlreadyexist({ email, phone }));
    console.log(stateData.isValidOrNot.result);
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
      dispatch(setTeacherRegistration(formData));
      navigate("/betterconnect/batchdetail");
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
                    autoComplete="off"
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
                    autoComplete="off"
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
                      autoComplete="off"
                      onInput={handleInput}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Pincode
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="pincode"
                      name="pincode"
                      autoComplete="off"
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
                      autoComplete="off"
                      onInput={handleInput}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Mobile No.
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      name="phone"
                      maxLength="10"
                      autoComplete="off"
                      aria-describedby="emailHelp"
                      placeholder="Mobile No."
                      onInput={handleInput}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="qualification" className="form-label">
                    Qualification (optional)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="qualification"
                    autoComplete="off"
                    aria-describedby="emailHelp"
                    placeholder="Ex. BCom, Mcom"
                    onInput={handleInput}
                  />
                </div>
                <div className="row justify-content-between align-items-center">
                  <div className="form-group">
                    <label className="form-label">Documnet (optional)</label>
                    <input
                      type="file"
                      className="form-control-file"
                      name="document"
                      id="document"
                      onChange={(e) => handleInput(e, "file")}
                    />
                    <label
                      className="form-control file-input d-flex align-items-center justify-content-between"
                      htmlFor="profile m-0"
                    >
                      <label
                        className="inner-place p-0 m-0"
                        id="document-file"
                        htmlFor=""
                      >
                        Upload Document
                      </label>
                      <label className="btn m-0" htmlFor="document">
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
                      onChange={(e) => handleInput(e)}
                    >
                      <option selected value="">
                        Select
                      </option>
                      <option value="Male">Male</option>
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
                      type="number"
                      className="form-control"
                      id="experience"
                      name="experience"
                      required
                      aria-describedby="emailHelp"
                      autoComplete="off"
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
                      onChange={(e) => handleInput(e, "file")}
                    />
                    <label
                      className="form-control m-0 file-input d-flex align-items-center justify-content-between"
                      htmlFor="profile"
                    >
                      <label
                        className="inner-place p-0 m-0"
                        htmlFor="profile"
                        id="picture"
                      >
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
                        name="currentlyAssociated"
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
                        name="currentlyAssociated"
                        id="inlineRadio2"
                        value="Institute"
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
                        name="currentlyAssociated"
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
                        name="currentlyAssociated"
                        id="inlineRadio4"
                        value="none"
                        onChange={handleRadios}
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
                    className="form-control school-active"
                    id="school"
                    name="schoolName"
                    aria-describedby="emailHelp"
                    placeholder=""
                    autoComplete="off"
                    onInput={handleInput}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control institute-active"
                    id="institute"
                    name="instituteName"
                    autoComplete="off"
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
