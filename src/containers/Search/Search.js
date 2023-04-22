import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getTeacherDetail } from "../../Redux/actions/teacherAction";
import "./Search.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { MdSocialDistance } from "react-icons/md";
import { Bs0Circle, BsCurrencyRupee, BsSearch } from "react-icons/bs";
import { BiTimeFive, BiFilterAlt } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stateTeachers = useSelector((state) => state.teacherRedu);
  const [allTeachersData, setAllTeachers] = useState([]);
  const data = {
    location: searchParams.get("location"),
    subject: searchParams.get("subject"),
    classVal: searchParams.get("class"),
    mode: searchParams.get("mode"),
  };
  const [filterObject, setFilterObject] = useState({
    classVal: "",
    subject: "",
  });

  console.log(filterObject);
  const handleFilter = () => {
    active ? setActive(false) : setActive(true);
  };

  useEffect(() => {
    console.log(data);
    dispatch(getTeacherDetail(data));
    setFilterObject({ ...filterObject, classVal: data.classVal });
    setFilterObject({ ...filterObject, subject: data.subject });
  }, [data.mode, data.class, data.subject]);

  useEffect(() => {
    console.log(data);
    setFilterObject({ ...filterObject, classVal: data.classVal });
    setFilterObject({ ...filterObject, subject: data.subject });
    setAllTeachers(stateTeachers.allteachers);
  }, [stateTeachers.allteachers]);

  useEffect(() => {
    if (stateTeachers.filterData.length) {
      console.log("hii");
      setAllTeachers(stateTeachers.filterData);
    } else {
      console.log("hello");
      setAllTeachers(stateTeachers.allteachers);
    }
  }, [stateTeachers.filterData]);
  useEffect(() => {
    filterAllData(stateTeachers.filterObject);
  }, [
    stateTeachers.filterObject.fees,
    stateTeachers.filterObject.experience,
    stateTeachers.filterObject.batch_size,
  ]);

  //handle filter bottom bar
  const handleFilterBottom = (text) => {
    const allEle = document.querySelectorAll(".inn-box");
    if (document.getElementById(text).classList.contains("active")) {
      document.getElementById(text).classList.remove("active");
      setActive(false);
      document.body.style.overflowY = "scroll";
      document.querySelector(".search-inn").style.display = "flex !important";
    } else {
      for (let ele = 0; ele < allEle.length; ele++) {
        allEle[ele].classList.remove("active");
        document.body.style.overflowY = "scroll";
        document.querySelector(".search-inn").style.display = "flex !important";
      }
      setActive(true);
      document.body.style.overflowY = "hidden";
      // document.querySelector(".search-inn").style.display = "none";
      document.getElementById(text).classList.add("active");
    }
  };

  // handle class subject input filter
  const handleClaasSubject = (e) => {
    setFilterObject({ ...filterObject, [e.target.name]: e.target.value });
  };

  const handleSearch = (name) => {
    if (name === "class") {
      navigate({
        pathname: "/search",
        search: `?location=${data.location}&class=${filterObject.classVal}&subject=${data.subject}&mode=${data.mode}`,
      });
    } else {
      navigate({
        pathname: "/search",
        search: `?location=${data.location}&class=${data.class}&subject=${filterObject.subject}&mode=${data.mode}`,
      });
    }
  };

  // handling allfilter left part
  let finalFilterData = stateTeachers.allteachers;
  const filterAllData = (obj) => {
    const { fees, distance, experience, batch_size } = obj;

    // fees filter
    if (fees && Object.keys(fees).length !== 0) {
      finalFilterData = finalFilterData.filter((item) => {
        return item.fees >= fees[0] && item.fees <= fees[1];
      });
    } else if (!experience && !batch_size && !distance) {
      finalFilterData = stateTeachers.allteachers;
    }

    //experience filter
    if (experience && Object.keys(experience).length !== 0) {
      finalFilterData = finalFilterData.filter((item) => {
        return (
          item.experience >= experience[0] && item.experience <= experience[1]
        );
      });
    } else if (!batch_size && !fees && !distance) {
      finalFilterData = stateTeachers.allteachers;
    }

    //batch size filter

    if (batch_size && Object.keys(batch_size).length !== 0) {
      finalFilterData = finalFilterData.filter((item) => {
        console.log("fdf", item);
        if (item.batchStrength.split(" ")[0] === "less") {
          return 0 <= batch_size[0] && 10 >= batch_size[1];
        } else if (item.batchStrength.split(" ")[0] === "more") {
          return 30 <= batch_size[0] && 100 >= batch_size[1];
        } else {
          return 10 <= batch_size[0] && 20 >= batch_size[1];
        }
      });
    } else if (!fees && !experience && !distance) {
      finalFilterData = stateTeachers.allteachers;
    }

    //distance
    if (distance && Object.keys(distance).length !== 0) {
      finalFilterData = finalFilterData.filter((item) => {
        let val = item.distance.toString().split(" ")[0];
        return val >= distance[0] && val <= distance[1];
      });
    } else if (!batch_size && !fees && !experience) {
      finalFilterData = stateTeachers.allteachers;
    }

    setAllTeachers(finalFilterData);
  };

  return (
    <>
      <Header backColor="#FFFFFF" page="search" />
      <section className="all-teachers">
        <div className="d-flex justify-content-between">
          <div className="left">
            <h3 className="heading">Search</h3>
            <div className="search-inn mb-3">
              <div className="class">
                <input
                  className="form-control"
                  placeholder="Class"
                  name="classVal"
                  id="classVal"
                  value={filterObject.classVal}
                  onInput={handleClaasSubject}
                />
                <BsSearch
                  className="search-icon"
                  onClick={() => handleSearch("class")}
                />
              </div>
              <div className="subject">
                <input
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  id="subject"
                  onInput={handleClaasSubject}
                  value={filterObject.subject}
                />
                <BsSearch
                  className="search-icon"
                  onClick={() => handleSearch("subject")}
                />
              </div>
            </div>
            <Filters
              classVal={active}
              data={data}
              allTeachersData={allTeachersData}
            />
          </div>
          <div className="right pl-5">
            {allTeachersData.map((item) => {
              return <Card detail={item} />;
            })}
          </div>
        </div>
        <div className="all-filters d-flex flex-row align-items-center justify-content-center">
          <Link
            className="distance inn-box d-flex flex-column align-items-center justify-content-center"
            id="distance"
            to="/betterconnect"
          >
            <AiOutlineHome
              className="dis-icon icon"
              style={{ color: "#fff" }}
            />
            <span className="title">Home</span>
          </Link>
          <div
            className="distance inn-box d-flex flex-column align-items-center justify-content-center"
            id="distance"
            onClick={() => handleFilterBottom("distance")}
          >
            <MdSocialDistance className="dis-icon icon" />
            <span className="title">Distance</span>
          </div>
          <div
            className="fees inn-box d-flex flex-column align-items-center justify-content-center"
            id="fees"
            onClick={() => handleFilterBottom("fees")}
          >
            <BsCurrencyRupee className="fees-icon icon" />
            <span className="title">Fees</span>
          </div>
          <div
            className="time inn-box d-flex flex-column align-items-center justify-content-center"
            id="time"
            onClick={() => handleFilterBottom("time")}
          >
            <BiTimeFive className="time-icon icon" />
            <span className="title">Time</span>
          </div>
          <div className="filter-block inn-box d-flex flex-column align-items-center justify-content-center active-icon">
            <BiFilterAlt className="filter-icon icon" />
            <span className="title">Filters</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
