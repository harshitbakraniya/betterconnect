import React, { useEffect } from "react";
import "./Filters.css";
import Range from "../Range/Range";

const Filters = ({ data }) => {
  useEffect(() => {
    const text = data.mode.toLowerCase();
    const ele = document.getElementById(`${text}`);
    ele.checked = true;
  }, []);
  return (
    <div className="filter">
      <h3 className="heading">Filters</h3>
      {/* <div className='search-inn mb-2'>
            <input className='form-control mb-2' placeholder='Class'/>
            <input className='form-control' placeholder='Subject'/>
        </div> */}
      <Range
        min={0}
        max={500}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        title="Fees"
        label="rupee"
      />
      <Range
        min={0}
        max={500}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        title="Distance"
        label="KM"
      />
      <Range
        min={0}
        max={500}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        title="Experience"
        label="years"
      />
      <Range
        min={0}
        max={500}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        title="Batch Size"
        label=""
      />
      <div className="modes">
        <h6 className="title-mode">Modes</h6>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="offline"
          />
          <label class="form-check-label" for="offline">
            Offline
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="hometutor"
          />
          <label class="form-check-label" for="hometutor">
            Hometutor
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="online"
          />
          <label class="form-check-label" for="online">
            Online
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
