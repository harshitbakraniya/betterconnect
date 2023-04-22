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
  const [rowsData, setRowsData] = useState([]);
  const teacherData = useSelector((state) => state.teacherRedu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [batch, setBatch] = useState([]);
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
    dispatch(setLocalBatch([innerData]));
  }, []);
  const addTableRows = () => {
    let arr = teacherData.LocalBatch;
    // console.log(arr[0]);
    if (JSON.stringify(arr[0]) === JSON.stringify(initialObject)) {
      arr[0] = innerData;
      arr.push(initialObject);
      dispatch(setLocalBatch(arr));
    } else {
      arr[arr.length - 1] = innerData;
      dispatch(setLocalBatch(arr));
    }

    // const rowsInput = {
    //   class: "",
    //   subject: "",
    //   board: "",
    //   mode: "",
    //   fees: 0,
    //   time: "",
    //   batchStrength: "",
    //   scholarship: "0",
    // };
    // setRowsData([...rowsData, rowsInput]);
    // if (JSON.parse(localStorage.getItem("allTeachers") === null)) {
    //   const arr = [];
    //   arr.push(rowsInput);
    //   localStorage.setItem("allTeachers", JSON.stringify(arr));
    // } else {
    //   const arr = JSON.parse(localStorage.getItem("allTeachers"));
    //   arr.push(rowsInput);
    //   localStorage.setItem("allTeachers", JSON.stringify(arr));
    // }
  };

  // const handleSave = () => {
  //   const array = JSON.parse(localStorage.getItem("allTeachers"));
  //   array[id] = innerData;
  //   localStorage.setItem("allTeachers", JSON.stringify(array));
  // };

  const handleSubmitForm = () => {
    const arr = JSON.parse(localStorage.getItem("allTeachers"));
    const obj = {
      ...teacherData.teacher,
      batchDetails: arr,
    };

    dispatch(regitrationWithBatchDetail(obj));
    toast.success("Registration successfull", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/betterconnect");
    }, 1000);
    // const mainObject = {
    //   teacherData.teacher,
    //   ...JSON.parse(localStorage.getItem("allTeachers")),
    // };
    // console.log(mainObject);
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
        <div className="table-content">
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
                {/* <th scope="col">Edit</th> */}
              </tr>
            </thead>
            <tbody>
              {teacherData?.LocalBatch &&
                teacherData?.LocalBatch.map((item, index) => {
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
                })}
              <tr>
                <td colSpan={9}>
                  <div className="add-submit d-flex align-items-center justify-content-between mb-2">
                    <button className="btn" onClick={addTableRows}>
                      Add batch
                    </button>
                    <button className="btn" onClick={handleSubmitForm}>
                      Submit
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default BatchDetail;
