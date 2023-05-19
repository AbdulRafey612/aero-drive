import React, { useState, useEffect, useRef } from "react";
import user from "../configs/user";
import wallpapers from "../configs/wallpapers";
import Fade from "react-reveal/Fade";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFont,
  faKey,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import axios from "axios";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [head, setHead] = useState("Aero Drive");
  const [sign, setSign] = useState("");
  const [signButton, setSignButton] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mode, setMode] = useState("");
  const dark = true;

  if (localStorage.getItem("token")) {
    props.setLogin(true);
  }

  const keyPress = (e) => {
    const keyCode = e.key;
    if (keyCode === "Enter") handleInputChange();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        setNameError(!value ? "* Name is required" : "");
        break;
      case "email":
        setEmail(value);
        setEmailError(
          value
            ? /\S+@\S+\.\S+/.test(value)
              ? ""
              : "* Invalid email format"
            : "* Email is required"
        );
        break;
      case "password":
        setPassword(value);
        setPasswordError(
          value.length >= 8
            ? ""
            : "* Password must be at least 8 characters long"
        );
        break;
      default:
        break;
    }

    // Check if any field is empty and show error message
    if (!name || !email || !password) {
      setSign("** Please fill out all fields");
    } else {
      setSign("");
    }
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    if (nameError || emailError || passwordError) {
      setSign("** Please fix the form errors");
      return;
    }
    if (mode === "signup") {
      signupHandle();
    } else if (mode === "login") {
      loginHandle();
    }
  };

  const handleSignUpClick = () => {
    setHead("Sign Up");
    setMode("signup");
    setSign("");
    setSignButton("Sign Up");
  };

  const handleLogInClick = () => {
    setHead("Log In");
    setMode("login");
    setSign("");
    setSignButton("Log In");
    // props.setLogin(true);
  };

  const handleResetPasswordClick = () => {
    setHead("Reset Password");
    setMode("resetPassword");
    setSign("to Reset Password");
  };

  // const loginHandle = () => {
  //   if (user.password === "" || user.password === password) {
  //     // not set password or password correct
  //     props.setLogin(true);
  //   } else if (password !== "") {
  //     // password not null and incorrect
  //     setSign("Incorrect password");
  //   }
  // };

  const loginHandle = () => {
    let formData = {
      name: name,
      email: email,
      password: password,
    };
    console.log("This is now the new game");
    if (mode == "login") {
      axios
        .post("http://localhost:5000/users/login", formData)
        .then((response) => {
          console.log(response.data);
          if (response.status == 200) {
            props.setLogin(true);
            localStorage.setItem("token", response.data.token);
          } else {
            setSign("Incorrect password");
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data); // => the response payload
            setSign("** Incorrect password or email!");
          }
        });
    } else {
      axios
        .post("http://localhost:5000/users/singup", formData)
        .then((response) => {
          console.log(response.data);
          if (response.status == 200) {
            props.setLogin(true);
            localStorage.setItem("token", response.data.token);
          } else if (response.status == 400) {
            console.log("This is the response", response);
            console.log(response);
            setSign("** Incorrect password !");
          }
        })
        .catch((error) => {
          console.log("This is the error for signup", error);
          if (error.response) {
            console.log(error.response.data); // => the response payload
            if (error.msg) {
              setSign(error.msg);
            } else {
              setSign("** Error when signing up !");
            }
          }
        });
    }
  };

  const signupHandle = () => {
    let formData = {
      name: name,
      email: email,
      password: password,
    };
    if (nameError || emailError || passwordError) {
      setSign("** Please fix the form errors");
      return;
    }
    axios
      .post("http://localhost:5000/users/signup", formData)
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          handleLogInClick();
          localStorage.setItem("token", response.data.token);
        } else {
          setSign("** Incorrect data !");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
          setSign("** Incorrect password or email !");
        }
      });
  };

  return (
    <div
      className="w-full h-full login text-center"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`,
      }}
    >
      <div className="inline-block w-100 relative top-1/2 -mt-60">
        {/* Head */}
        <div>
          <Fade left>
            <h1 style={{ color: "white", fontSize: "4em" }}>{head}</h1>
          </Fade>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <>
              {/* Name Input */}

              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-5 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="text"
                  name="name"
                  placeholder="User Name"
                  onClick={(e) => e.stopPropagation()}
                  onKeyPress={keyPress}
                  value={name}
                  onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon icon={faFont} style={{ color: "white" }} />
                </div>
              </div>
              {nameError && <div className="mt-1 error">{nameError}</div>}

              {/* Email Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-4 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onClick={(e) => e.stopPropagation()}
                  onKeyPress={keyPress}
                  value={email}
                  onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white" }}
                  />
                </div>
              </div>
              {emailError && <div className="mt-1 error">{emailError}</div>}

              {/* Password Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-4 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onClick={(e) => e.stopPropagation()}
                  onKeyPress={keyPress}
                  value={password}
                  onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon icon={faKey} style={{ color: "white" }} />
                </div>
              </div>
              {passwordError && (
                <div className="mt-1 error">{passwordError}</div>
              )}

              {/* Enter */}
              <div className="invalid  mt-4">{sign}</div>
              <button
                className="blur-button mt-2"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  signupHandle();
                }}
              >
                {signButton}
              </button>
            </>
          )}

          {mode === "login" && (
            <>
              {/* Email Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-5 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  value={email}
                  onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white" }}
                  />
                </div>
              </div>
              {emailError && <div className="mt-1 error">{emailError}</div>}

              {/* Password Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-3 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  value={password}
                  onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon icon={faKey} style={{ color: "white" }} />
                </div>
              </div>
              {passwordError && (
                <div className="mt-1 error">{passwordError}</div>
              )}

              <div className="invalid  mt-5">{sign}</div>
              <button
                className="blur-button mt-2"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  loginHandle();
                }}
              >
                {signButton}
              </button>
            </>
          )}
        </form>
      </div>

      {/* buttons */}
      <div className="text-sm fixed bottom-10 left-0 right-0 mx-auto flex flex-row space-x-4 w-max">
        <div
          className="hstack flex-col text-white w-30 cursor-pointer"
          onClick={handleSignUpClick}
        >
          <div className="flex-center h-10 w-10 bg-gray-700 rounded-full">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
          <span>Sign Up</span>
        </div>

        <div
          className="hstack flex-col text-white w-30 cursor-pointer"
          onClick={handleLogInClick}
        >
          <div className="flex-center h-10 w-10 bg-gray-700 rounded-full">
            <FontAwesomeIcon icon={faRightToBracket} />
          </div>
          <span>Log In</span>
        </div>
      </div>
    </div>
  );
}
