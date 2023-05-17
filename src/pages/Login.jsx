import React, { useState, useEffect, useRef } from "react";
import user from "../configs/user";
import wallpapers from "../configs/wallpapers";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFont,
  faKey,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [head, setHead] = useState("Aero Drive");
  const [sign, setSign] = useState("");
  const [mode, setMode] = useState("");
  const dark = true;

  const keyPress = (e) => {
    const keyCode = e.key;
    if (keyCode === "Enter") loginHandle();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const loginHandle = () => {
    if (user.password === "" || user.password === password) {
      // not set password or password correct
      props.setLogin(true);
    } else if (password !== "") {
      // password not null and incorrect
      setSign("Incorrect password");
    }
  };

  const handleSignUpClick = () => {
    setHead("Sign Up");
    setMode("signup");
    setSign("to Sign Up");
  };

  const handleLogInClick = () => {
    setHead("Log In");
    setMode("login");
    setSign("to Log In");
  };

  const handleResetPasswordClick = () => {
    setHead("Reset Password");
    setMode("resetPassword");
    setSign("to Reset Password");
  };

  return (
    <div
      className="w-full h-full login text-center"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`,
      }}
      // onClick={() => loginHandle()}
    >
      <div className="inline-block w-100 relative top-1/2 -mt-40">
        {/* Head */}
        <div>
          <Fade left>
            <h1 style={{ color: "white", fontSize: "4em" }}>{head}</h1>
          </Fade>
        </div>

        <form>
          {mode === "signup" && (
            <>
              {/* Name Input */}
              <div className="mx-auto flex space-x-4">
                <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-4 rounded-md backdrop-blur-2xl bg-gray-300/50">
                  <input
                    className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                    type="text"
                    name="name"
                    placeholder="User Name"
                    onClick={(e) => e.stopPropagation()}
                    // onKeyPress={keyPress}
                    // value={name}
                    // onChange={handleInputChange}
                  />
                  <div className="col-start-5 col-span-1 flex-center">
                    <FontAwesomeIcon icon={faFont} style={{ color: "white" }} />
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-3 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  // value={email}
                  // onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white" }}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-3 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  // value={password}
                  // onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon icon={faKey} style={{ color: "white" }} />
                </div>
              </div>

              {/* Enter */}
              <div
                className="text-sm mt-5 text-gray-200 cursor-pointer"
                onClick={() => handleLogInClick()}
              >
                Click here {sign}
              </div>
            </>
          )}

          {mode === "login" && (
            <>
              {/* Email Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-3 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  // value={email}
                  // onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white" }}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-3 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  // value={password}
                  // onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon icon={faKey} style={{ color: "white" }} />
                </div>
              </div>

              <div
                className="text-sm mt-5 text-gray-200 cursor-pointer"
                onClick={() => props.setLogin(true)}
              >
                Click here {sign}
              </div>
            </>
          )}

          {mode === "resetPassword" && (
            <>
              {/* Email Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-3 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  // value={email}
                  // onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "white" }}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-3 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  // value={password}
                  // onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon icon={faKey} style={{ color: "white" }} />
                </div>
              </div>

              {/* Verify Password */}
              <div className="mx-auto grid grid-cols-5 w-90 h-8 mt-3 rounded-md backdrop-blur-2xl bg-gray-300/50">
                <input
                  className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
                  type="password"
                  name="verifypassword"
                  placeholder="Verify Password"
                  onClick={(e) => e.stopPropagation()}
                  // onKeyPress={keyPress}
                  // value={name}
                  // onChange={handleInputChange}
                />
                <div className="col-start-5 col-span-1 flex-center">
                  <FontAwesomeIcon icon={faKey} style={{ color: "white" }} />
                </div>
              </div>

              {/* Enter */}
              <div
                className="text-sm mt-5 text-gray-200 cursor-pointer"
                onClick={() => handleLogInClick()}
              >
                Click here {sign}
              </div>
            </>
          )}
        </form>
      </div>

      {/* buttons */}
      <div className="text-sm fixed bottom-16 left-0 right-0 mx-auto flex flex-row space-x-4 w-max">
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

        <div
          className="hstack flex-col text-white w-30 cursor-pointer"
          onClick={handleResetPasswordClick}
        >
          <div className="flex-center h-10 w-10 bg-gray-700 rounded-full">
            <FontAwesomeIcon icon={faKey} />
          </div>
          <span>Reset Passcode</span>
        </div>
      </div>
    </div>
  );
}
