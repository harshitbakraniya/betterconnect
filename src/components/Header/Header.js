import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Header.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import Logo from "../../assets/images/logo.svg";
import { useDispatch } from "react-redux";
import {
  isEmailorPhoneAlreadyexist,
  setEmailState,
} from "../../Redux/actions/teacherAction";

const Header = ({ backColor }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop > 10
      ? (header.style.backgroundColor = "#fff")
      : (header.style.backgroundColor = "transparent");
  };

  const handleNav = () => {
    if (active) {
      document.querySelector(".list").style.height = "0px";
      setActive(false);
    } else {
      document.querySelector(".list").style.height = "250px";
      setActive(true);
    }
  };

  return (
    <header
      className={`header ${active ? "active" : ""}`}
      style={{ backgroundColor: backColor }}
    >
      <nav className="navigation d-flex align-items-center justify-content-between">
        <ul className="list d-flex align-items-center">
          <li className="list-item">
            <Link
              activeClass="active"
              to="banner"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              About Us
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="impact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Impact
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="logo d-flex align-items-center">
          <RouterLink to="/betterconnect">
            <img src={Logo} alt="logo" />
          </RouterLink>
        </div>
        <div className="register-btn">
          <RouterLink
            to="/betterconnect/teacher"
            onClick={() => {
              dispatch(setEmailState({}));
            }}
          >
            <button className="btn">Register as teacher</button>
          </RouterLink>
        </div>
        {active ? (
          <GrClose className="menu-btn" onClick={handleNav} />
        ) : (
          <HiMenuAlt3 className="menu-btn" onClick={handleNav} />
        )}
      </nav>
    </header>
  );
};

export default Header;
