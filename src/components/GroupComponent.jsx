import PropTypes from "prop-types";
import "./GroupComponent.css";
import { useState } from "react";
import { login_url } from "../utils/Constants";
import { ApiCall } from "../Services/Api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GroupComponent = ({ className = "" }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [errormessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginData || !loginData.username || !loginData.password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const response = await ApiCall("POST", login_url, loginData);
      console.log(response, "re");
      if (response.status === 200) {
        toast.success("Login successfulL");
        localStorage.setItem("User_token", response?.data?.token);
        localStorage.setItem("User_name", response?.data?.firstName);

        navigate("/Home");
      } else {
        setErrorMessage(response?.response?.data?.message);
        toast.error(response?.response?.data?.message);
      }
    } catch (error) {
      console.log(error, "msg");
    }
  };

  return (
    <div className={`rectangle-parent6 ${className}`}>
      <div className="frame-child13" />
      <div className="logo-container-wrapper">
        <div className="logo-container">
          <img
            className="logo-icon"
            loading="lazy"
            alt=""
            src="/vector-71.svg"
          />
          <div className="logo-container-inner">
            <img
              className="frame-child14"
              loading="lazy"
              alt=""
              src="/group-366.svg"
            />
          </div>
        </div>
      </div>
      <div className="login-form-container-wrapper">
        <div className="login-form-container">
          <div className="login-icon-parent">
            <img
              className="login-icon"
              loading="lazy"
              alt=""
              src="/vector-6.svg"
            />
            <b className="report-downlad-portal">Report Downlad portal</b>
          </div>
          <div className="rectangle-parent7">
            <div className="frame-child15" />
            <div className="login-wrapper">
              <a className="login1">Login</a>
            </div>
            <form className="username-field-parent">
              <div className="username-field">
                <div className="username">Username</div>
                <div className="email-input-container-parent">
                  <input
                    className="email-input-container"
                    placeholder="Enter email Id"
                    type="text"
                    onChange={(e) => {
                      setLoginData({
                        ...loginData,
                        username: e.target.value,
                      });
                      setErrorMessage("");
                    }}
                  />
                  <img className="frame-child16" alt="" src="/group-3341.svg" />
                </div>
                <div className="username1">Password</div>
                <div className="frame-parent5">
                  <input
                    className="frame-input"
                    placeholder="Password"
                    type="text"
                    onChange={(e) => {
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      });
                      setErrorMessage("");
                    }}
                  />
                  <img
                    className="frame-child17"
                    alt=""
                    src="/group-334-1.svg"
                  />
                </div>
              </div>
              <button className="submit-wrapper">
                <div className="submit" onClick={handleLogin}>
                  SUBMIT
                </div>
              </button>
              <div className="reset-password">Reset Password</div>
            </form>
          </div>
        </div>
      </div>
      {errormessage && (
        <div className="error-message">
          Wrong Credentials! Your email ID or password entered is wrong
        </div>
      )}

      <div className="agreement-icon-parent">
        <img
          className="agreement-icon"
          loading="lazy"
          alt=""
          src="/vector-51.svg"
        />

        <div className="frame-wrapper1">
          <div className="line-roundedphone-parent">
            <img
              className="line-roundedphone-icon1"
              loading="lazy"
              alt=""
              src="/line-roundedphone.svg"
            />
            <b className="terms-link">(+91) 9288008801</b>
          </div>
        </div>
      </div>
      <div className="i-hereby-agree-and-accept-the-wrapper">
        <div className="i-hereby-agree-container">
          <span>{`I hereby agree and accept the `}</span>
          <span className="terms-of-service">Terms of service</span>
          <span>{` and `}</span>
          <span className="privacy-policy2">Privacy policy</span>
        </div>
      </div>
      <div className="line-roundedchevron-down1" />
    </div>
  );
};

export default GroupComponent;
