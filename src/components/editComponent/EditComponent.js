import React, { useState } from "react";
import "./EditComponent.css";

const EditComponent = ({ data, id, setInnerData }) => {
  // const [active, setActive] = useState();
  const [inner, setInner] = useState(data);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInner({ ...inner, [name]: value });
    setInnerData(inner);
    if (localStorage.getItem("batchDetail") !== null) {
      let arr = JSON.parse(localStorage.getItem("batchDetail"));
      let updateObj = arr.find((item, index) => {
        return index === id;
      });
      let obj = updateObj;
      obj[name] = value;
      arr[id] = obj;
      localStorage.setItem("batchDetail", JSON.stringify(arr));
    }
  };

  return (
    <tr className="edit-compo active" id={id}>
      <td data-label="Class">
        <input
          type="text"
          className="form-control"
          name="class"
          placeholder="Class"
          autoComplete="off"
          value={inner.class}
          required
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
          required
          value={inner.subject}
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Board">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="board"
            required
            value={inner.board}
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
          required
          value={inner.fees}
          autoComplete="off"
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Scholarship">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            required
            name="scholarship"
            value={inner.scholarship}
            onChange={(e) => handleChange(e)}
          >
            <option>Select</option>
            <option value="zero">Zero</option>
            <option value="Upto 10%">Upto 10%</option>
            <option value="Upto 20%">Upto 20%</option>
            <option value="Upto 30%">Upto 30%</option>
            <option value="Upto 40%">Upto 40%</option>
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
          value={inner.time}
          required
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td data-label="Batch size">
        <div className="input-group">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="batchStrength"
            required
            value={inner.batchStrength}
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
            value={inner.mode}
            required
            onChange={(e) => handleChange(e)}
          >
            <option>Select</option>
            <option value="Offline">Offline</option>
            <option value="Hometutor">Hometutor</option>
            <option value="Online">Online</option>
          </select>
        </div>
      </td>
      {/* <td className="icons">
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
      </td> */}
    </tr>
  );
};

export default EditComponent;
