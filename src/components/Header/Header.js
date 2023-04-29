import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import "./Header.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import Logo from "../../assets/images/logo.svg";
import { useDispatch } from "react-redux";
import {
  isEmailorPhoneAlreadyexist,
  setEmailState,
} from "../../Redux/actions/teacherAction";

const Header = ({ backColor, page }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      document.querySelector(".menu-btn").style.display = "none";
    }
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
          {!page && (
            <>
              <li className="list-item">
                <LinkRouter
                  // activeClass="active"
                  to="/"
                  onClick={handleNav}
                  // spy={true}
                  // smooth={true}
                  // offset={0}
                  // duration={500}
                >
                  Home
                </LinkRouter>
              </li>
              <li className="list-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={handleNav}
                >
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
                  onClick={handleNav}
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
                  onClick={handleNav}
                >
                  Contact Us
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="logo d-flex align-items-center">
          <RouterLink to="/">
            <img src={Logo} alt="logo" />
          </RouterLink>
        </div>
        <div className="register-btn">
          <div class="dropdown show">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Teacher
            </a>

            <div
              class="dropdown-menu text-left"
              aria-labelledby="dropdownMenuLink"
            >
              <RouterLink
                to="/teacher/login"
                className="dropdown-item"
                onClick={() => {
                  dispatch(setEmailState({}));
                }}
              >
                Login as teacher
              </RouterLink>
              <RouterLink
                to="/teacher/register"
                className="dropdown-item"
                onClick={() => {
                  dispatch(setEmailState({}));
                }}
              >
                Register as teacher
              </RouterLink>
            </div>
          </div>
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
