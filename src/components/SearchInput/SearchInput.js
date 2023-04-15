import React, { useState } from "react";
import "./SearchInput.css";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchInput = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    location: "",
    subject: "",
    class: "",
    mode: "",
    pageSize: 0,
    pageNumber: 0,
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.location !== "") {
      navigate({
        pathname: "/betterconnect/search",
        search: `?location=${data.location}&class=${data.class}&subject=${data.subject}&mode=${data.mode}`,
      });
    } else {
      console.log("hello");
      toast.error(
        "To get the proper result kindly mention the City name at the end of the address",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
  return (
    <div className="input-group search d-flex align-items-center">
      <input
        type="text"
        className="form-control"
        aria-label="Text input with dropdown button"
        placeholder="Location"
        name="location"
        value={data.location}
        onInput={handleInput}
      />
      <input
        type="text"
        className="form-control"
        aria-label="Text input with dropdown button"
        placeholder="Subject"
        name="subject"
        value={data.subject}
        onInput={handleInput}
      />
      <input
        type="text"
        className="form-control"
        aria-label="Text input with dropdown button"
        placeholder="Class"
        name="class"
        value={data.class}
        onInput={handleInput}
      />
      <select
        className="custom-select"
        id="inputGroupSelect01"
        name="mode"
        onChange={handleInput}
      >
        <option selected value={data.mode}>
          Offline
        </option>
        <option value="Hometutor">Home-tutor</option>
        <option value="Online">Online</option>
      </select>
      <FiSearch className="search-icon" onClick={handleSubmit} />
    </div>
  );
};

export default SearchInput;
