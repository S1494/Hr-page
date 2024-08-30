import React from "react";

const AboutMe = () => {
  return (
    <>
      <section id="aboutme">
        <div className="container">
          <div className="row">
            <div className="col-md-5 left">
              <div>
                <img className="myimg2" src="slider-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-7 right">
              <div className="aboutme-info">
                <p className="heading">About US</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  dolorem officiis ex laudantium vel. Tenetur minus odit
                  tempora? Cum tempora corporis reiciendis magni aperiam
                  architecto quibusdam suscipit atque at est!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
