import React, { useState } from "react";
import {MdDeleteOutline} from 'react-icons/md';
import {BiEdit} from 'react-icons/bi';
import './EditComponent.css';

const EditComponent = ({value}) => {
    // const [active,setActive] = useState(true);
    const handleInput = (id) => {
        // if(active) {
        //     setActive(false);
            document.getElementById(`${id}`).classList.remove('active');
        // }else {
            // setActive(true);
            // document.getElementById(`#${id}`).classList.remove('active');
        // }
    }
  return (
    <tr className="edit-compo active" id={`${value.id}`} >
      <td data-label="Class">
        <div className="input-group">
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>{value.class}</option>
            <option value="1">11th</option>
            <option value="2">12th</option>
          </select>
        </div>
      </td>
      <td data-label="Subject">
        <input type="text" className="form-control" placeholder="Subject" value={value.subject}/>
      </td>
      <td data-label="Board">
        <div className="input-group">
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>{value.board}</option>
            <option value="1">11th</option>
            <option value="2">12th</option>
          </select>
        </div>
      </td>
      <td data-label="Fees">
        <input type="text" className="form-control" placeholder="Fees" value={value.fees}/>
      </td>
      <td data-label="Time">
        <input type="text" className="form-control" placeholder="Time" value={value.time}/>
      </td>
      <td data-label="Batch size">
        <input type="text" className="form-control" placeholder="Batch size" value={value.batch_size}/>
      </td>
      <td data-label="Mode">
        <div className="input-group">
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>{value.mode}</option>
            <option value="1">Hometutor</option>
            <option value="2">Online</option>
          </select>
        </div>
      </td>
      <td className="icons">
        <BiEdit className="edit-icon" onClick={() => handleInput(value.id)}/>
        <MdDeleteOutline className="delete-icon" />
      </td>
    </tr>
  );
};

export default EditComponent;
