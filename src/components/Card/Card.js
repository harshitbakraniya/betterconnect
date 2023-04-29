import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../../assets/images/profile-teacher.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { studentAlreadyRegistered } from "../../Redux/actions/studentAction";
import StudentDetail from "../StudentDetails/StudentDetail";
import "./Card.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Card = ({ detail, handleShow }) => {
  const {
    name,
    distance,
    time,
    fees,
    image,
    scholarship,
    batchStrength,
    experience,
    batchId,
    teacherId,
  } = detail;

  return (
    <>
      <ToastContainer />
      <div className="card-profile">
        <div className="d-flex inner">
          <div className="img-part">
            <img src={ProfileImg} alt="" />
            <button
              className="btn contact-btn"
              // data-toggle="modal"
              // data-target="#exampleModalCenter"
              onClick={() => handleShow(batchId, teacherId)}
            >
              Get Contact
            </button>
          </div>
          <div className="content d-flex align-items-start flex-column justify-content-between">
            <h6 className="name">{name}</h6>
            <p className="sub-title">
              It is not important what the teacher teaches – it is important HOW
              the teacher teaches.
            </p>
            <div className="other-detail d-flex align-items-center justify-content-between">
              <div className="data">
                <h5 className="data-about">Distance</h5>
                <p className="value">{distance}</p>
              </div>
              <div className="data">
                <h5 className="data-about">Fees</h5>
                <p className="value">{fees}</p>
              </div>
              <div className="data">
                <h5 className="data-about">Scholarship</h5>
                <p className="value">{scholarship}</p>
              </div>
              <div className="data">
                <h5 className="data-about">Batch Size</h5>
                <p className="value">{batchStrength}</p>
              </div>
              <div className="data">
                <h5 className="data-about">Time</h5>
                <p className="value">{time}</p>
              </div>
              <div className="data">
                <h5 className="data-about">Experience</h5>
                <p className="value">{experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
