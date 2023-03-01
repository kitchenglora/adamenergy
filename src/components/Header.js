import React from "react";
import logo from "../Assets/adamLogo.png";
const Header = () => {
  function handleChange(e) {
    const value = e.target.value;
    console.log(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="header">
      <img src={logo} alt="logo" /> <span>KYC Form</span>
    </div>
  );
};

export default Header;
