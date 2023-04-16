import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { MdOutlineSaveAlt } from "react-icons/md";
import "./EditComponent.css";

const EditComponent = ({ data, id, batch, setBatch }) => {
  const [active, setActive] = useState(data.subject);
  const [innerData, setInnerData] = useState({});

  useEffect(() => {
    setInnerData(data);
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
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="class"
            onChange={(e) => handleChange(e)}
          >
            <option selected value={innerData.class}>
              {innerData.class}
            </option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
          </select>
        </div>
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
            onChange={(e) => handleChange(e)}
          >
            <option selected value={innerData.board}>
              CBSE
            </option>
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
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Mode">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="scholarship"
            onChange={(e) => handleChange(e)}
          >
            <option selected value={innerData.scholarship}>
              {innerData.scholarship}
            </option>
            <option value="Upto 10%">Upto 10%</option>
            <option value="Upto to 20%">Upto to 20%</option>
            <option value="Upto to 30%">Upto to 30%</option>
          </select>
        </div>
      </td>
      <td data-label="Time">
        <input
          type="text"
          className="form-control"
          name="time"
          placeholder="Ex.10-11PM"
          value={innerData.time}
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Batch size">
        <input
          type="text"
          className="form-control"
          name="batchStrength"
          placeholder="Ex.(11-20)"
          value={innerData.batchStrength}
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Mode">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="mode"
            onChange={(e) => handleChange(e)}
          >
            <option selected value={innerData.mode}>
              {innerData.mode}
            </option>
            <option value="Hometutor">Hometutor</option>
            <option value="Online">Online</option>
          </select>
        </div>
      </td>
      <td className="icons">
        {!active ? (
          <MdOutlineSaveAlt
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
