import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 left-header">
              <div className="logo">
                <img src="mumir_logo.svg" alt="" />
              </div>
              <h2 className="name">
                <span>M</span>umair
              </h2>
            </div>
            <div className="col-md-9 right-header">
              <ul className="">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
