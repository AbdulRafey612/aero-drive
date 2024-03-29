import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { useWindowSize } from "~/hooks/useWindowSize";
import { useStore } from "~/stores";

const FullIcon = ({ size }) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 13 13"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <path d="M9.26 12.03L.006 2.73v9.3H9.26zM2.735.012l9.3 9.3v-9.3h-9.3z" />
    </svg>
  );
};

const ExitFullIcon = ({ size }) => {
  return (
    <svg
      className="icon"
      viewBox="0 0 19 19"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <path d="M18.373 9.23L9.75.606V9.23h8.624zM.6 9.742l8.623 8.624V9.742H.599z" />
    </svg>
  );
};

const minMarginY = 32;
const minMarginX = 100;

const TrafficLights = ({ id, close, max, setMax, setMin }) => {
  const closeWindow = (e) => {
    e.stopPropagation();
    close(id);
  };

  return (
    <div className="traffic-lights flex flex-row absolute left-0 space-x-2 pl-2 mt-1.5">
      <button
        className="window-btn bg-red-500 dark:bg-red-400"
        onClick={closeWindow}
        onTouchEnd={closeWindow}
      >
        <span className="icon i-gg:close text-[9px]" />
      </button>
      <button
        className={`window-btn ${max ? "c-bg-400" : "bg-yellow-500 dark:bg-yellow-400"}`}
        onClick={() => setMin(id)}
        onTouchEnd={() => setMin(id)}
        disabled={max}
      >
        <span className={`icon i-fe:minus text-[10px] ${max ? "invisible" : ""}`} />
      </button>
      <button
        className="window-btn bg-green-500 dark:bg-green-400"
        onClick={() => setMax(id)}
        onTouchEnd={() => setMax(id)}
      >
        {max ? <ExitFullIcon size={9} /> : <FullIcon size={6} />}
      </button>
    </div>
  );
};

const Window = (props) => {
  const dockSize = useStore((state) => state.dockSize);
  const { winWidth, winHeight } = useWindowSize();

  const initWidth = Math.min(winWidth, props.width ? props.width : 640);
  const initHeight = Math.min(winHeight, props.height ? props.height : 400);

  const [state, setState] = useState({
    width: initWidth,
    height: initHeight,
    // "+ winWidth" because of the boundary for windows
    x: winWidth + Math.random() * (winWidth - initWidth),
    // "- minMarginY" because of the boundary for windows
    y: Math.random() * (winHeight - initHeight - minMarginY)
  });

  useEffect(() => {
    setState({
      ...state,
      width: Math.min(winWidth, state.width),
      height: Math.min(winHeight, state.height)
    });
  }, [winWidth, winHeight]);

  const round = props.max ? "rounded-none" : "rounded-lg";
  const minimized = props.min
    ? "opacity-0 invisible transition-opacity duration-300"
    : "";
  const border = props.max ? "" : "border border-gray-500/30";
  const width = props.max ? winWidth : state.width;
  const height = props.max ? winHeight : state.height;

  const children = React.cloneElement(props.children , {
    width: width
  });

  return (
    <Rnd
      bounds="parent"
      size={{
        width: width,
        height: height
      }}
      position={{
        x: props.max
          ? winWidth // because of boundary
          : Math.min(
              // "winWidth * 2" because of the boundary for windows
              winWidth * 2 - minMarginX,
              Math.max(
                // "+ winWidth" because we add a boundary for windows
                winWidth - state.width + minMarginX,
                state.x
              )
            ),
        y: props.max
          ? -minMarginY // because of boundary
          : Math.min(
              // "- minMarginY" because of the boundary for windows
              winHeight - minMarginY - (dockSize + 15 + minMarginY),
              Math.max(0, state.y)
            )
      }}
      onDragStop={(e, d) => {
        setState({ ...state, x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setState({
          ...state,
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          ...position
        });
      }}
      minWidth={props.minWidth ? props.minWidth : 200}
      minHeight={props.minHeight ? props.minHeight : 150}
      dragHandleClassName="window-bar"
      disableDragging={props.max}
      enableResizing={!props.max}
      style={{ zIndex: props.z }}
      onMouseDown={() => props.focus(props.id)}
      className={`absolute ${round} overflow-hidden bg-transparent w-full h-full ${border} shadow-lg shadow-black/30 ${minimized}`}
      id={`window-${props.id}`}
    >
      <div
        className="window-bar relative h-6 text-center c-bg-200"
        onDoubleClick={() => props.setMax(props.id)}
      >
        <TrafficLights
          id={props.id}
          close={props.close}
          max={props.max}
          setMax={props.setMax}
          setMin={props.setMin}
        />
        <span className="font-semibold c-text-700">{props.title}</span>
      </div>
      <div className="innner-window w-full overflow-y-hidden">{children}</div>
    </Rnd>
  );
};

export default Window;
