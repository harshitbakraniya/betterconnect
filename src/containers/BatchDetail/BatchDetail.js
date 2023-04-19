import React, { useEffect, useState } from "react";
import "./BatchDetail.css";
import Black from "../../assets/images/black.svg";
import EditComponent from "../../components/editComponent/EditComponent";
import Header from "../../components/Header/Header";
import { regitrationWithBatchDetail } from "../../Redux/actions/teacherAction";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const BatchDetail = () => {
  const [rowsData, setRowsData] = useState([]);
  const teacherData = useSelector((state) => state.teacherRedu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [batch, setBatch] = useState([]);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("allTeachers"))) {
      addTableRows();
    }
  }, []);
  const addTableRows = () => {
    const rowsInput = {
      class: "",
      subject: "",
      board: "",
      mode: "",
      fees: 0,
      time: "",
      batchStrength: "",
      scholarship: "0",
    };
    setRowsData([...rowsData, rowsInput]);
    if (JSON.parse(localStorage.getItem("allTeachers") === null)) {
      const arr = [];
      arr.push(rowsInput);
      localStorage.setItem("allTeachers", JSON.stringify(arr));
    } else {
      const arr = JSON.parse(localStorage.getItem("allTeachers"));
      arr.push(rowsInput);
      localStorage.setItem("allTeachers", JSON.stringify(arr));
    }
  };

  const handleSubmitForm = () => {
    const arr = JSON.parse(localStorage.getItem("allTeachers"));
    const obj = {
      ...teacherData.teacher,
      batchDetails: arr,
    };
    console.log(obj);
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
                <th scope="col">Class</th>
                <th scope="col">Subject</th>
                <th scope="col">Board</th>
                <th scope="col">Fees</th>
                <th scope="col">Scholership</th>
                <th scope="col">Time</th>
                <th scope="col">Batch Strength</th>
                <th scope="col">Mode</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(localStorage.getItem("allTeachers")) &&
                JSON.parse(localStorage.getItem("allTeachers")).map(
                  (item, index) => {
                    return (
                      <EditComponent
                        data={item}
                        id={index}
                        batch={batch}
                        setBatch={setBatch}
                      />
                    );
                  }
                )}
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
