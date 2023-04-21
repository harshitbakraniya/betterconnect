import React, { useEffect, useState } from "react";
import "./Filters.css";
import Range from "../Range/Range";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setFilterData,
  setFilterObjectRedux,
} from "../../Redux/actions/teacherAction";

const Filters = ({ data, classVal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterDataIn, setFilterDataIn] = useState([]);
  const stateData = useSelector((state) => state.teacherRedu);
  const [filterObject, setFilterObject] = useState({
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

  useEffect(() => {
    dispatch(setFilterData(filterDataIn));
  }, [filterDataIn.length]);
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
  const handleGender = (e) => {
    if (e.target.checked) {
      let data = stateData.allteachers.filter((item) => {
        return item.gender === e.target.value;
      });
      setFilterDataIn([...filterDataIn, ...data]);
      // console.log(finalData);
    } else {
      let data = filterDataIn.filter((item) => {
        return item.gender != e.target.value;
      });
      setFilterDataIn(data);
    }
  };
  return (
    <>
      <div className={classVal ? "filter active" : "filter"}>
        <h3 className="heading">Filters</h3>
        <Range
          min={100}
          max={20000}
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
          max={30}
          // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          title="Experience"
          label="years"
          handleRange={(min, max) => handleRange("experience", min, max)}
        />
        <Range
          min={0}
          max={100}
          // onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          title="Batch Size"
          handleRange={(min, max) => handleRange("batch_size", min, max)}
          label=""
        />
        <div className="row justify-content-start">
          <div className="modes flex-grow-1">
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
          <div className="modes flex-grow-1">
            <h6 className="title-mode">Gender</h6>
            <div className="all-radios d-flex flex-column ">
              <div class="form-check">
                <input
                  class="form-check-input gender-check"
                  type="checkbox"
                  value="Male"
                  id="male"
                  name="male"
                  onChange={handleGender}
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input gender-check"
                  type="checkbox"
                  value="Female"
                  id="female"
                  name="female"
                  onChange={handleGender}
                />
                <label class="form-check-label" for="female">
                  Female
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input gender-check"
                  type="checkbox"
                  value="Both"
                  id="both"
                  name="both"
                  onChange={handleGender}
                />
                <label class="form-check-label" for="both">
                  Both
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
