import { useState } from "react";
import GroupComponent from "../components/GroupComponent";
import "./Login.css";


const Login = () => {

  
 

  return (
    <div className="login">
      <main className="background-image-parent">
        <img
          className="background-image-icon"
          alt=""
          src="/background-image@2x.png"
        />
        <section className="background-image" />
      </main>
      <div className="login-inner">
        <GroupComponent />
      </div>
      <div className="footer">
        <div className="footer-left1">
          <span className="copyright">Copyright</span>
          <span>{` `}</span>
          <span className="span3">©</span>
          <span>{` `}</span>
          <span className="access-home-lab">
            2023 Access Home Lab Solutions
          </span>
        </div>
        <div className="footer-right1">
          <span className="all-rights-reserved1">All Rights Reserved |</span>
          <span>{` `}</span>
          <span className="terms-and-conditions1">Terms and Conditions</span>
          <span>{` `}</span>
          <span className="span4">|</span>
          <span>{` `}</span>
          <span className="privacy-policy1">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
