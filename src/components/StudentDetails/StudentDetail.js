import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudentDetail } from "../../Redux/actions/studentAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentDetail = () => {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    school: "",
    email: "",
    teacherId: 0,
    batchId: 0,
  });
  const dispatch = useDispatch();
  const studentState = useSelector((state) => state.studentRedu);
  useEffect(() => {
    if (studentData.studentDetail) {
      toast.error(`${studentData.studentDetail.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [studentState.studentDetail]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setStudentDetail(studentData));
  };
  return (
    <>
      <ToastContainer />
      <div
        class="modal fade"
        id="student-registration"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Fill the following to get teacher detail
              </h5>
            </div>
            <form class="modal-body">
              <input
                type="text"
                className="from-control"
                name="firstname"
                placeholder="First Name"
                onInput={handleChange}
              />
              <input
                type="text"
                className="from-control"
                name="lastname"
                placeholder="Last Name"
                onInput={handleChange}
              />
              <input
                type="email"
                className="from-control"
                name="email"
                placeholder="Email Address"
                onInput={handleChange}
              />
              <input
                type="number"
                className="from-control"
                name="phone"
                placeholder="Contact"
                onInput={handleChange}
              />
              <input
                type="text"
                className="from-control"
                name="school"
                placeholder="School"
                onInput={handleChange}
              />
              <input
                type="text"
                className="from-control"
                name="city"
                placeholder="City"
                onInput={handleChange}
              />
            </form>
            <div class="modal-footer">
              <button type="button" class="btn close-btn" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetail;
