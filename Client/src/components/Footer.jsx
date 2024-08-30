import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="footer-about">
                <div className="heading">About Us</div>
                <div className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  officiis ullam dolorem odit maiores, modi aperiam earum
                  distinctio excepturi nihil fugiat optio soluta perspiciatis!
                  Dolor voluptates itaque excepturi aliquid. Adipisci.
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-list">
                <div className="heading">Support</div>
                <ul>
                  <li>
                    {" "}
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">Contacu Us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">Helpdesk</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-social">
                <div className="heading">Connect with us</div>
                <div className="icons">
                  <i class="bi bi-facebook"></i>
                  <i class="bi bi-twitter-x"></i>
                  <i class="bi bi-github"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright@ Mumair</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
