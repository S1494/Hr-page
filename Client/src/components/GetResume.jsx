import React from "react";
import { Link } from "react-router-dom";

const GetResume = () => {
  return (
    <>
      <section id="getresume">
        <div className="container">
          <div className="row">
            <div className="col-md-12 getresume">
              <div className="intro">
                <p className="heading">Submit Your Resume</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum beatae officiis fuga nostrum vero, aliquam
                  architecto placeat totam commodi
                </p>
              </div>
              <div className="btn-box">
                <Link to="/signup">
                  <button className="resume-btn btn">
                    Submit Your Resume Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetResume;
