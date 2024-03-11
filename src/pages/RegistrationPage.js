import React, { useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import background from "../assets/images/background.png";
import superapp from "../assets/images/superApp.png";

function validateForm(name, username, email, mobile, isChecked) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    errors.name = "Name should contain only letters and spaces";
  }

  if (!username.trim()) {
    errors.username = "Username is required";
  } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
    errors.username = "Username should contain only letters and numbers";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Email is not valid";
  }

  if (!mobile.trim()) {
    errors.mobile = "Mobile number is required";
  } else if (!/^[1-9]\d{9}$/.test(mobile)) {
    errors.mobile =
      "Mobile number should be a 10-digit number starting with a non-zero digit";
  }

  if (!isChecked) {
    errors.checkbox = "Please accept the terms and conditions";
  }

  return errors;
}

function RegistrationPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(
      name,
      username,
      email,
      mobile,
      isChecked
    );
    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem(
        "formData",
        JSON.stringify({ name, username, email, mobile, isChecked })
      );
        toast.success("Form data saved to localStorage!", {
            autoClose: 2000,
        });
        toast.success("Redirecting to Category page...", {
            autoClose: 2000,
        });
        setTimeout(() => {
            navigate('/category');
        }, 2000);
    } else {
        Object.values(validationErrors).forEach((errorMsg) => {
            toast.error(errorMsg, {
                position: "bottom-right",
                autoClose: 2000,
            });
        });
    }
  };

  return (
    <div className="parent">
      <div
        className="left"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="left-top-content">
          <div>
            <span>Already have an account?</span>
          </div>
          <button id="login">LOGIN</button>
        </div>
        <div className="left-bottom-content">
          Discover new things on
          <br />
          Superapp
        </div>
      </div>
      <div className="right">
        <div className="top-content">
          <img src={superapp} alt="superapp" />
          <span>Create your new account</span>
          <div className="top-content-footer">
            <div className="text">Email</div>
            <div className="line"></div>
            <div
              className="text
                      "
            >
              Google
            </div>
          </div>
        </div>
        <div className="input-fields">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
          <div className="check">
            <input
              id="checkbox"
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span className="checkbox-content">
              Share my registration data with superapp
            </span>
          </div>
        </div>
        <div className="bottom-content">
          <button id="signup" onClick={handleSubmit}>
            SIGN UP
          </button>
          <span>
            By clicking on Sign up you agree to Superapp{" "}
            <span id="green-text"> Terms and Conditions of use</span>
          </span>
          <span>
            To learn more about how Superapp collects, users, shares, and
            protects your personal data please head Superapp{" "}
            <span id="green-text">Privacy Policy</span>
          </span>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default RegistrationPage;
