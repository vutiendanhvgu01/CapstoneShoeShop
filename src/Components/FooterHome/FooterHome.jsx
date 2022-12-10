import React from "react";
import "../../assets/css/FooterHome.css";
const FooterHome = () => {
  return (
    <div>
      <div className="row footer-head">
        <div className="col-lg-4 col-md-4 col-xl-4 col-xs-4 block-content">
          <div className="content">
            <h3>GET HELP</h3>
            <ul>
              <li>Home</li>
              <li>Nike</li>
              <li>Adidas</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-xl-4 col-xs-4  block-content">
          <div className="content">
            <h3>SUPPORT</h3>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Help</li>
              <li>Phone</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-xl-4 col-xs-4  block-content">
          <div className="content">
            <h3>REGISTER</h3>
            <ul>
              <li>Register</li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-body">
        <p>
          © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn
          Khải.
        </p>
      </div>
    </div>
  );
};

export default FooterHome;
