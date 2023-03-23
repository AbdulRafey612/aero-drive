import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";

function Desktop() {
  const [context, setContext] = React.useState(false);
  const [xYPosistion, setXyPosistion] = React.useState({ x: 0, y: 0 });
  const [chosen, setChosen] = React.useState();
  const [subMenu, setSubMenu] = React.useState(null);

  const showNav = (event) => {
    event.preventDefault();
    setContext(false);
    const positionChange = {
      x: event.pageX,
      y: event.pageY,
    };
    setXyPosistion(positionChange);
    setContext(true);
  };

  const hideContext = (event) => {
    setContext(false);
  };

  const initMenu = (chosen) => {
    setChosen(chosen);
  };

  const handleMouseEnter = (index) => {
    setSubMenu(index === 0 && chosen === "New" ? 1 : index);
  };

  const handleMouseLeave = () => {
    setSubMenu(null);
  };

  const now = new Date();
  const options = {
    timeZone: "Asia/Karachi",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTime = now.toLocaleString("en-US", options);

  return (
    <>
      {/* Menubar */}
      <Container fluid className="menubar">
        <Row>
          <Col xs={4} lg={6} style={{ fontWeight: "bold" }}>
            AeroDrive
          </Col>
          <Col
            xs={8}
            lg={6}
            className="d-flex justify-content-end align-items-end"
          >
            <div className="d-flex align-items-center">
              <img
                src={require("./assets/icons/user.png")}
                alt="user"
                className="menubar-icon mx-3"
              />
              <img
                src={require("./assets/icons/expand.png")}
                alt="expand"
                className="menubar-icon mr-4"
              />
              {formattedTime}{" "}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Taskbar */}
      <Container className="taskbar">
        <Row sm={12}>
          <Col>
            {" "}
            <img
              src={require("./assets/icons/start.png")}
              alt="start"
              className="taskbar-icon"
            />
          </Col>
          <Col>
            <img
              src={require("./assets/icons/file-manager.png")}
              alt="file-manager"
              className="taskbar-icon"
            />
          </Col>
          <Col>
            <img
              src={require("./assets/icons/camera.png")}
              alt="camera"
              className="taskbar-icon"
            />
          </Col>
          <Col>
            <img
              src={require("./assets/icons/notepad.png")}
              alr="notepad"
              className="taskbar-icon"
            />
          </Col>
          <Col>
            <img
              src={require("./assets/icons/terminal.png")}
              alt="terminal"
              className="taskbar-icon"
            />
          </Col>
          <Col>
            <img
              src={require("./assets/icons/about.png")}
              alt="about"
              className="taskbar-icon"
            />
          </Col>
        </Row>
      </Container>

      {/* Cascading Menu */}
      <div
        className="contextContainer"
        onContextMenu={showNav}
        onClick={hideContext}
      >
        {context && (
          <div
            style={{ top: xYPosistion.y, left: xYPosistion.x }}
            className="menu"
          >
            <div
              className="menuElement"
              onClick={() => initMenu("Sort by")}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave()}
            >
              Sort by
              {subMenu === 0 && (
                <div className="sub-menu">
                  <div className="sub-menu-item">Name</div>
                  <div className="sub-menu-item">Type</div>
                  <div className="sub-menu-item">Size</div>
                </div>
              )}
            </div>
            <div
              className="menuElement"
              onClick={() => initMenu("New")}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave()}
            >
              New
              {subMenu === 1 && (
                <div className="sub-menu">
                  <div className="sub-menu-item">New Document</div>
                  <div className="sub-menu-item">New Folder</div>
                </div>
              )}
            </div>
            <div className="menuElement" onClick={() => initMenu("Copy")}>
              Upload Here
            </div>
            <div className="menuElement" onClick={() => initMenu("Paste")}>
              Change Desktop Bg
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Desktop;
