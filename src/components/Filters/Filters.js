import React, { useEffect, useState } from "react";
import "./Filters.css";
import Range from "../Range/Range";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "../../Redux/actions/teacherAction";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setFilterObjectRedux } from "../../Redux/actions/teacherAction";

const Filters = ({ data, allTeachersData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const teachersData = useSelector((state) => state.teacherRedu);
  let filteredData = [];
  const [filterObject, setFilterObject] = useState({
    class: "",
    subject: "",
    fees: [],
    experience: [],
    batch_size: [],
  });

  useEffect(() => {
    if (data.mode) {
      const text = data.mode.toLowerCase();
      console.log(text);
      const ele = document.getElementById(`${text}`);
      ele.checked = true;
    }
  }, []);

  useEffect(() => {
    dispatch(setFilterObjectRedux(filterObject));
  }, [filterObject]);

  const handleClass = (e) => {
    // if (e.target.value) {
    //   let output;
    //   if (teachersData.filterData.length) {
    //     output = teachersData.filterData.filter((item) => {
    //       return item.class.includes(e.target.value);
    //     });
    //   } else {
    //     output = teachersData.allteachers.filter((item) => {
    //       return item.class.includes(e.target.value);
    //     });
    //   }

    //   dispatch(setFilterData(output));
    // } else {
    // }
    setFilterObject((prevState) => ({
      ...prevState,
      class: e.target.value,
    }));
  };
  const handleSubject = (e) => {
    setFilterObject({
      ...filterObject,
      subject: e.target.value,
    });
  };
  const handleRadios = (e) => {
    navigate({
      pathname: "/betterconnect/search",
      search: `?location=${data.location}&class=${data.class}&subject=${data.subject}&mode=${e.target.value}`,
    });
  };

  const handleRange = (type, min, max) => {
    setFilterObject({
      ...filterObject,
      [type]: [min, max],
    });
  };
  return (
    <div className="filter">
      <h3 className="heading">Filters</h3>
      <div className="search-inn mb-2">
        <input
          className="form-control mb-2"
          placeholder="Class"
          name="class"
          value={filterObject.class}
          onChange={handleClass}
        />
        <input
          className="form-control"
          placeholder="Subject"
          name="subject"
          value={filterObject.subject}
          onChange={handleSubject}
        />
      </div>
      <Range
        min={0}
        max={2000}
        // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        title="Fees"
        label=""
        handleRange={(min, max) => handleRange("fees", min, max)}
      />
      <Range
        min={0}
        max={500}
        // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        title="Distance"
        label="KM"
        handleRange={(min, max) => handleRange("distance", min, max)}
      />
      <Range
        min={0}
        max={10}
        // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        title="Experience"
        label="years"
        handleRange={(min, max) => handleRange("experience", min, max)}
      />
      <Range
        min={0}
        max={200}
        // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        title="Batch Size"
        handleRange={(min, max) => handleRange("batch_size", min, max)}
        label=""
      />
      <div className="modes">
        <h6 className="title-mode">Modes</h6>
        <div className="all-radios d-flex flex-column ">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="mode"
              id="offline"
              value="Offline"
              onChange={handleRadios}
            />
            <label className="form-check-label" htmlFor="offline">
              Offline
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="mode"
              id="hometutor"
              value="Hometutor"
              onChange={handleRadios}
            />
            <label className="form-check-label" htmlFor="hometutor">
              Hometutor
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="mode"
              id="online"
              value="Online"
              onChange={handleRadios}
            />
            <label className="form-check-label" htmlFor="online">
              Online
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
