import React, { useState } from "react";
// import { useStore } from "~/stores";
import  user  from "../configs/user";
import  wallpapers  from "../configs/wallpapers";
    

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("Click to enter");
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

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const loginHandle = () => {
    if (user.password === "" || user.password === password) {
      // not set password or password correct
       props.setLogin(true);
    } else if (password !== "") {
      // password not null and incorrect
      setSign("Incorrect password");
    }
  };

  return (
    <div
      className="w-full h-full login text-center"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`
      }}
      onClick={() => loginHandle()}
    >
      <div className="inline-block w-auto relative top-1/2 -mt-40">
        {/* Avatar */}
        <img
          className="rounded-full w-24 h-24 my-0 mx-auto"
          src={user.avatar}
          alt="img"
        />
        <form>
        <div className="font-semibold mt-2 text-xl text-white">{user.name}</div>
         {/* Email Input */}
         <div className="mx-auto grid grid-cols-5 w-44 h-8 mt-4 rounded-md backdrop-blur-2xl bg-gray-300/50">
        {/* <input
            className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
            type="text"
            placeholder="Enter Email"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={keyPress}
            value={email}
            onChange={handleInputChange}
          /> */}
          <input
            className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
            type="text"
            name="email"
            placeholder="Enter Email"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={keyPress}
            value={email}
            onChange={handleInputChange}
          />
          <div className="col-start-5 col-span-1 flex-center">
            <span className="i-bi:question-square-fill text-white ml-1" />
          </div>
        </div>
        {/* Password Input */}
        <div className="mx-auto grid grid-cols-5 w-44 h-8 mt-1 rounded-md backdrop-blur-2xl bg-gray-300/50">
        {/* <input
            className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
            type="text"
            placeholder="Enter Email"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={keyPress}
            value={email}
            onChange={handleInputChange}
          /> */}
          <input
            className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-2"
            type="password"
            name="password"
            placeholder="Enter Password"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={keyPress}
            value={password}
            onChange={handleInputChange}
          />
          <div className="col-start-5 col-span-1 flex-center">
            <span className="i-bi:question-square-fill text-white ml-1" />
          </div>
        </div>
       </form>
        <div className="text-sm mt-2 text-gray-200 cursor-pointer">{sign}</div>
      </div>

      {/* buttons */}
      <div className="text-sm fixed bottom-16 left-0 right-0 mx-auto flex flex-row space-x-4 w-max">
        <div
          className="hstack flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.sleepMac(e)}
        >
          <div className="flex-center h-10 w-10 bg-gray-700 rounded-full">
            <span className="i-gg:sleep text-[40px]" />
          </div>
          <span>Sleep</span>
        </div>
        <div
          className="hstack flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.restartMac(e)}
        >
          <div className="flex-center h-10 w-10 bg-gray-700 rounded-full">
            <span className="i-ri:restart-line text-4xl" />
          </div>
          <span>Restart</span>
        </div>
        <div
          className="hstack flex-col text-white w-24 cursor-pointer"
          onClick={(e) => props.shutMac(e)}
        >
          <div className="flex-center h-10 w-10 bg-gray-700 rounded-full">
            <span className="i-ri:shut-down-line text-4xl" />
          </div>
          <span>Shut Down</span>
        </div>
      </div>
    </div>
  );
}