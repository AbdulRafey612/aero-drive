import React, { useState } from "react";

import Desktop from "./Desktop";
import Boot from "./pages/Boot";
import Login from "./pages/Login";
//CSS
import "./styles/index.css";
import 'virtual:uno.css';
import "@unocss/reset/tailwind.css";
import "katex/dist/katex.min.css";


function App() {
  const [login, setLogin] = useState(false);
  const [booting, setBooting] = useState(false);
  const [restart, setRestart] = useState(false);
  const [sleep, setSleep] = useState(false);

  const shutMac = (e) => {
    e.stopPropagation();
    setRestart(false);
    setSleep(false);
    setLogin(false);
    setBooting(true);
  };

  const restartMac = (e) => {
    e.stopPropagation();
    setRestart(true);
    setSleep(false);
    setLogin(false);
    setBooting(true);
  };

  const sleepMac = (e) => {
    e.stopPropagation();
    setRestart(false);
    setSleep(true);
    setLogin(false);
    setBooting(true);
  };
  if (booting) {
    return <Boot restart={restart} sleep={sleep} setBooting={setBooting} />;
  } else if (login) {
    return (
      <Desktop
        setLogin={setLogin}
        shutMac={shutMac}
        sleepMac={sleepMac}
        restartMac={restartMac}
      />
    );
  } else {
    
    return (
      <Login
        setLogin={setLogin}
        shutMac={shutMac}
        sleepMac={sleepMac}
        restartMac={restartMac}
      />
    );
  }
}

export default App;
