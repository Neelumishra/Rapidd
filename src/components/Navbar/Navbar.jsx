import React, { useState } from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import {GiHamburgerMenu} from "react-icons/Gi"
function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="container-fluid bg-light">
      <div className="innercontainer">
        <div className="row navbarCss mx-2 d-flex align-items-center ">
          <div className="col-1 logo d-flex align-items-center justify-content-center">
            <img
              src="https://www.figma.com/file/nsA0rvuI8PxoIgsikJcj57/Candidate-mock?type=design&node-id=1-411&mode=design&t=1HwmccFaGMi1tmgA-4"
              alt="Logo"
            />
          </div>
          <div
            className="offset-7 col-1  headerText dropdown dropbtn"
            onClick={toggleDropdown}
            dropdown
          >
            ipsum
            <div
              // className={
              //   isDropdownVisible ? "dropdown-content show" : "dropdown-content"
              // }
              className="dropdowncontent"
            >
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
            </div>
          </div>
          <div
            className="col-1 dropdown headerText dropbtn"
            onClick={toggleDropdown}
          >
            ipsum
            <div
              // className={
              //   isDropdownVisible ? "dropdown-content show" : "dropdown-content"
              // }
              className="dropdowncontent"
            >
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
            </div>
          </div>
          <div
            className="col-1 dropdown headerText dropbtn"
            onClick={toggleDropdown}
          >
            ipsum
            <div
              // className={
              //   isDropdownVisible ? "dropdown-content show" : "dropdown-content"
              // }
              className="dropdowncontent"
            >
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
            </div>
          </div>
          <div className="col-1 dropdown headerText dropbtn">
            ipsum
            <div
              // className={
              //   isDropdownVisible ? "dropdown-content show" : "dropdown-content"
              // }
              className="dropdowncontent"
            >
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
              <a href="#">Ipsum</a>
            </div>
          </div>
          <GiHamburgerMenu onClick={toggleDropdown} className={"hamberger"} />

          <div
            className={
              isDropdownVisible ? "hambergerdropdown" : "hambergerdropdownshow"
            }
          >
            <span onClick={toggleDropdown} className="cancellogo">
              ❌
            </span>
            <a href="#">Ipsum</a>
            <a href="#">Ipsum</a>
            <a href="#">Ipsum</a>
            <a href="#">Ipsum</a>
            <a href="#">Ipsum</a>
          </div>
        </div>

        <div>
          <h1 className="text-center headingouter">
            Proident anim{" "}
            <span className="headinginner">
              <b>nor nulla iste</b>
            </span>
          </h1>
        </div>
      </div>
      <div className="MidHeader m-2 row">
        <div className="midHeading  col-6">
          Minim modi yet omnis nor quia so minima.
        </div>
        <div className="col-2 logo">
          <Button
            icon="email"
            text="Ipsum Lorem"
            backgroundColor="#f8f9fa"
            fontWeight=""
            lineHeight=""
            fontSize=""
          />
        </div>
        <div className="col-2">
          <Button icon="link" text="Ipsum Lorem" backgroundColor="#f8f9fa" />
        </div>
        <div className="col-2">
          <Button
            icon="location"
            text="Ipsum Lorem"
            backgroundColor="#f8f9fa"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
