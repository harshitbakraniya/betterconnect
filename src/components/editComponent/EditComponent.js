import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { RiSave3Fill } from "react-icons/ri";
import "./EditComponent.css";

const EditComponent = ({ data, id, batch, setBatch }) => {
  const [active, setActive] = useState();
  const [innerData, setInnerData] = useState({});
  const optionsForBatch = [
    {
      id: 1,
      value: "less than 10",
      minMax: [0, 10],
    },
    {
      id: 2,
      value: "10 to 20",
      minMax: [10, 20],
    },
    {
      id: 3,
      value: "more than 30",
      minMax: [30, 500],
    },
  ];
  useEffect(() => {
    setInnerData(data);
    setActive(data.subject);
  }, [data]);

  const handleSave = (e) => {
    const array = JSON.parse(localStorage.getItem("allTeachers"));
    array[id] = innerData;
    localStorage.setItem("allTeachers", JSON.stringify(array));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInnerData({ ...innerData, [name]: value });
  };

  const handleBtns = () => {
    if (active) {
      document.getElementById(id).classList.add("active");
      setActive(false);
    } else {
      document.getElementById(id).classList.remove("active");
      setActive(true);
    }
  };

  const handleDelete = (data) => {
    const filterData = JSON.parse(localStorage.getItem("allTeachers")).filter(
      (item) => {
        return JSON.stringify(item) != JSON.stringify(data);
      }
    );
    setBatch(filterData);
    localStorage.setItem("allTeachers", JSON.stringify(filterData));
  };
  return (
    <tr className={`edit-compo ${data.subject ? "" : "active"}`} id={id}>
      <td data-label="Class">
        <input
          type="text"
          className="form-control"
          name="class"
          placeholder="Class"
          autoComplete="off"
          value={innerData.class}
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Subject">
        <input
          type="text"
          className="form-control"
          name="subject"
          placeholder="Subject"
          autoComplete="off"
          value={innerData.subject}
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Board">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="board"
            value={innerData.board}
            onChange={(e) => handleChange(e)}
          >
            <option>Select</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="IGCSE">IGCSE</option>
          </select>
        </div>
      </td>
      <td data-label="Fees">
        <input
          type="number"
          className="form-control"
          name="fees"
          placeholder="Fees"
          value={innerData.fees}
          autoComplete="off"
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Mode">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="scholarship"
            value={innerData.scholarship}
            onChange={(e) => handleChange(e)}
          >
            <option>Select</option>
            <option value="Upto 10%">0</option>
            <option value="Upto 10%">Upto 10%</option>
            <option value="Upto to 20%">Upto 20%</option>
            <option value="Upto to 30%">Upto 30%</option>
            <option value="Upto to 40%">Upto 40%</option>
          </select>
        </div>
      </td>
      <td data-label="Time">
        <input
          type="text"
          className="form-control"
          name="time"
          placeholder="Ex.10-11PM"
          autoComplete="off"
          value={innerData.time}
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Batch size">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="batchStrength"
            value={innerData.batchStrength}
            onChange={(e) => handleChange(e)}
          >
            <option>Select</option>
            {optionsForBatch.map((item) => {
              return <option value={item.value}>{item.value}</option>;
            })}
          </select>
        </div>
      </td>
      <td data-label="Mode">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="mode"
            value={innerData.mode}
            onChange={(e) => handleChange(e)}
          >
            <option>Select</option>
            <option value="Offline">Offline</option>
            <option value="Hometutor">Hometutor</option>
            <option value="Online">Online</option>
          </select>
        </div>
      </td>
      <td className="icons">
        {!active ? (
          <RiSave3Fill
            className="edit-icon"
            id="save"
            onClick={() => {
              handleSave(id, data);
              handleBtns();
            }}
          />
        ) : (
          <BiEdit
            className="edit-icon"
            id="edit"
            onClick={() => handleBtns()}
          />
        )}
        <MdDeleteOutline
          className="delete-icon"
          onClick={() => handleDelete(data)}
        />
      </td>
    </tr>
  );
};

export default EditComponent;
