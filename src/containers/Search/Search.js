import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import { useSearchParams } from "react-router-dom";
import { getTeacherDetail } from "../../Redux/actions/teacherAction";
import "./Search.css";
import { useSelector, useDispatch } from "react-redux";
import { BiFilter } from "react-icons/bi";
import { IoMdTennisball } from "react-icons/io";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const stateTeachers = useSelector((state) => state.teacherRedu);
  const [allTeachersData, setAllTeachers] = useState([]);
  const teacherFilter = useSelector((state) => state.teacherRedu);
  // console.log(teacherFilter.filterObject);
  const data = {
    location: searchParams.get("location"),
    subject: searchParams.get("subject"),
    class: searchParams.get("class"),
    mode: searchParams.get("mode"),
  };

  const handleFilter = () => {
    active ? setActive(false) : setActive(true);
  };

  useEffect(() => {
    dispatch(getTeacherDetail(data));
  }, [data.mode]);

  useEffect(() => {
    setAllTeachers(stateTeachers.allteachers);
  }, [stateTeachers.allteachers]);
  useEffect(() => {
    filterAllData(stateTeachers.filterObject);
  }, [
    stateTeachers.filterObject.class,
    stateTeachers.filterObject.subject,
    stateTeachers.filterObject.fees,
    stateTeachers.filterObject.experience,
    stateTeachers.filterObject.batch_size,
  ]);

  let finalFilterData = stateTeachers.allteachers;
  const filterAllData = (obj) => {
    console.log(obj);
    const {
      class: classData,
      subject,
      fees,
      distance,
      experience,
      batch_size,
    } = obj;

    // class filter
    if (classData) {
      console.log("llo");
      finalFilterData = finalFilterData.filter((item) => {
        return item.class.toString().includes(classData);
      });
    } else if (!subject && !fees) {
      console.log("gello");
      finalFilterData = stateTeachers.allteachers;
    }

    // subject filter
    if (subject) {
      console.log("llo");
      finalFilterData = finalFilterData.filter((item) => {
        return item.subject.toString().toLowerCase().includes(subject);
      });
    } else if (!classData && !fees && !batch_size && !experience) {
      console.log("gello");
      finalFilterData = stateTeachers.allteachers;
    }

    // fees filter
    if (fees && Object.keys(fees).length !== 0) {
      finalFilterData = finalFilterData.filter((item) => {
        return item.fees >= fees[0] && item.fees <= fees[1];
      });
    } else if (!subject && !classData && !experience && !batch_size) {
      finalFilterData = stateTeachers.allteachers;
    }

    //experience filter
    if (experience && Object.keys(experience).length !== 0) {
      finalFilterData = finalFilterData.filter((item) => {
        return (
          item.experience >= experience[0] && item.experience <= experience[1]
        );
      });
    } else if (!subject && !classData && !batch_size && !fees) {
      finalFilterData = stateTeachers.allteachers;
    }

    //batch size filter
    if (batch_size && Object.keys(batch_size).length !== 0) {
      finalFilterData = finalFilterData.filter((item) => {
        return (
          item.batchStrength.toString().split("-")[0] >= batch_size[0] &&
          item.batchStrength.toString().split("-")[1] <= batch_size[1]
        );
      });
    } else if (!subject && !classData && !fees && !experience) {
      finalFilterData = stateTeachers.allteachers;
    }

    setAllTeachers(finalFilterData);
  };
  return (
    <>
      <Header backColor="#FFFFFF" />
      <section className="all-teachers">
        <div className="d-flex justify-content-between">
          <div className={active ? "left active" : "left"}>
            <Filters data={data} allTeachersData={allTeachersData} />
          </div>
          <div className="right pl-5">
            <h5 className="filter-text" onClick={handleFilter}>
              Filters
              <BiFilter className="filter-icon" />
            </h5>
            {allTeachersData.map((item) => {
              return <Card detail={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
