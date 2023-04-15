import React, { useEffect, useState } from "react";
import "./BatchDetail.css";
import Black from "../../assets/images/black.svg";
import EditComponent from "../../components/editComponent/EditComponent";
import Header from "../../components/Header/Header";

const BatchDetail = () => {
  const [rowsData, setRowsData] = useState([]);
  const [batch, setBatch] = useState([]);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("allTeachers"))) {
      addTableRows();
    }
  }, []);
  const addTableRows = () => {
    const rowsInput = {
      batchId: 0,
      class: "10th",
      subject: "",
      board: "CBSE",
      mode: "Offline",
      fees: 500,
      time: "",
      teacherId: 0,
      batchStrength: "",
      feature: "",
      schrolership: "up to 10%",
      teacher: null,
    };
    setRowsData([...rowsData, rowsInput]);
    if (JSON.parse(localStorage.getItem("allTeachers") === null)) {
      const arr = [];
      arr.push(rowsInput);
      console.log(arr);
      localStorage.setItem("allTeachers", JSON.stringify(arr));
    } else {
      const arr = JSON.parse(localStorage.getItem("allTeachers"));
      arr.push(rowsInput);
      console.log(arr);
      localStorage.setItem("allTeachers", JSON.stringify(arr));
    }
  };

  return (
    <>
      <Header />
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
                    <button className="btn">Submit</button>
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
