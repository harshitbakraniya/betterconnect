import React from "react";
import ProfileImg from "../../assets/images/profile-teacher.jpg";
import StudentDetail from "../StudentDetails/StudentDetail";
import "./Card.css";

const Card = ({ detail }) => {
  const {
    name,
    city,
    distance,
    time,
    subject,
    board,
    mode,
    fees,
    batchStrength,
    experience,
  } = detail;
  return (
    <div className="card-profile">
      <div className="d-flex inner">
        <div className="img-part">
          <img src={ProfileImg} alt="" />
          <button
            className="btn contact-btn"
            data-toggle="modal"
            data-target="#exampleModalCenter"
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
              <h5 className="data-about">Subject</h5>
              <p className="value">{subject}</p>
            </div>
            <div className="data">
              <h5 className="data-about">Mode</h5>
              <p className="value">{mode}</p>
            </div>
            <div className="data">
              <h5 className="data-about">Fees</h5>
              <p className="value">{fees}</p>
            </div>
            <div className="data">
              <h5 className="data-about">Batch size</h5>
              <p className="value">{batchStrength}</p>
            </div>
            <div className="data">
              <h5 className="data-about">Experience</h5>
              <p className="value">{experience}</p>
            </div>
            <div className="data">
              <h5 className="data-about">Time</h5>
              <p className="value">{time}</p>
            </div>
            <div className="data">
              <h5 className="data-about">Rating</h5>
              <p className="value">4.6</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Get Detail
              </h5>
            </div>
            <form class="modal-body">
              <input
                type="email"
                className="from-control"
                name="email"
                placeholder="Email Address"
              />
            </form>
            <div class="modal-footer">
              <button type="button" class="btn close-btn" data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn submit"
                data-target="#student-registration"
                data-toggle="modal"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <StudentDetail />
    </div>
  );
};

export default Card;
