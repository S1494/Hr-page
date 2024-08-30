import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <section id="introduction">
        <div className="container">
          <div className="row">
            <div className="col-md-7 left">
              <div className="intro-about">
                <p className="intro">We Are Your Partners in Human Resource</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit autem alias aperiam. Officia dignissimos nesciunt
                  libero in obcaecati eius ab, alias atque quas omnis quo sit
                  ratione aperiam eligendi quam . Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Suscipit autem alias aperiam.
                  Officia dignissimos nesciunt libero in obcaecati eius ab,
                  alias atque quas omnis quo sit ratione aperiam eligendi quam
                </p>
              </div>
            </div>
            <div className="col-md-5 right">
              <div>
                <img className="myimg1" src="slider-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
