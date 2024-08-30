import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Api_URL = import.meta.env.VITE_SERVER_URL;

const Signup = () => {
  const [formData, SetFormData] = useState({});
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    SetFormData({ ...formData, resume: e.target.files[0] });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${Api_URL}/signup`, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.message) {
            setMessage(res.data.message);
          }
        });
    } catch (error) {
      if (error.response.data.message) {
        setMessage(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <>
      <section id="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="formbox">
                <h3>SUBMIT YOUR RESUME</h3>
                <p className="message">{message}</p>
                <form action="" onSubmit={submitForm} method="post">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input
                      type="password"
                      id="confirmpassword"
                      name="confirmpassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume:</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <input type="submit" value="Submit" className="submit" />
                </form>
                <p className="gotohome">
                  <Link to="/">Go to Home Page</Link>
                </p>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
