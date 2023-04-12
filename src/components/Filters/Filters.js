import React from "react";
import "./Filters.css";
import Range from "../Range/Range";

const Filters = () => {
  return (
    <div className="filter ">
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
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">
            Offline
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck2"
          />
          <label class="form-check-label" for="defaultCheck2">
            Hometutor
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck3"
          />
          <label class="form-check-label" for="defaultCheck3">
            Online
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
