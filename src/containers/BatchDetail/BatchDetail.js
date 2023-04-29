import React, { useEffect, useState } from "react";
import "./BatchDetail.css";
import Black from "../../assets/images/black.svg";
import EditComponent from "../../components/editComponent/EditComponent";
import Header from "../../components/Header/Header";
import {
  regitrationWithBatchDetail,
  setLocalBatch,
} from "../../Redux/actions/teacherAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { json, useNavigate } from "react-router-dom";

const BatchDetail = () => {
  const teacherData = useSelector((state) => state.teacherRedu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [batch, setBatch] = useState([]);

  // useEffect(() => {
  //   if (teacherData.teacherObjectWithBatch.result !== undefined) {
  //     alert("registration successfull");
  //   }
  // }, [teacherData.teacherObjectWithBatch.result]);
  const initialObject = {
    class: "",
    subject: "",
    board: "",
    mode: "",
    fees: 0,
    time: "",
    batchStrength: "",
    scholarship: "0",
  };
  const [innerData, setInnerData] = useState({
    class: "",
    subject: "",
    board: "",
    mode: "",
    fees: 0,
    time: "",
    batchStrength: "",
    scholarship: "0",
  });
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("batchDetail"))) {
      localStorage.setItem("batchDetail", JSON.stringify([initialObject]));
    }
    dispatch(setLocalBatch([innerData]));
  }, []);

  const addTableRows = () => {
    let arr = JSON.parse(localStorage.getItem("batchDetail"));
    arr.push(initialObject);
    localStorage.setItem("batchDetail", JSON.stringify(arr));
    dispatch(setLocalBatch(arr));
  };

  const handleSubmitForm = () => {
    console.log(teacherData.teacher);
    const mainData = {
      ...teacherData.teacher,
      batchDetails: teacherData.LocalBatch,
    };
    dispatch(regitrationWithBatchDetail(mainData));
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <section className="batch-detail">
        <div className="title">
          <img src={Black} alt="pattern" />
          <span className="content">
            Batch<span className="color-text">Details</span>
          </span>
        </div>
        <form className="table-content">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Class/Course</th>
                <th scope="col">Subject</th>
                <th scope="col">Board</th>
                <th scope="col">Fees</th>
                <th scope="col">Scholership</th>
                <th scope="col">Time</th>
                <th scope="col">Batch Strength</th>
                <th scope="col">Mode</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(localStorage.getItem("batchDetail")) &&
                JSON.parse(localStorage.getItem("batchDetail")).map(
                  (item, index) => {
                    return (
                      <EditComponent
                        data={item}
                        id={index}
                        batch={batch}
                        setBatch={setBatch}
                        innerData={innerData}
                        setInnerData={setInnerData}
                      />
                    );
                  }
                )}
              <tr>
                <td colSpan={9}>
                  <div className="add-submit d-flex align-items-center justify-content-between mb-2">
                    <input
                      type="submit"
                      className="btn"
                      onClick={addTableRows}
                      value="Add batch"
                    />

                    <input
                      type="submit"
                      className="btn"
                      onClick={handleSubmitForm}
                      value="Submit"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    </>
  );
};

export default BatchDetail;
