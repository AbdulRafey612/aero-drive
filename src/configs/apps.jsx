import FaceTime from "~/components/apps/FaceTime";
import Terminal from "~/components/apps/Terminal";
import Safari from "~/components/apps/Safari";
import Bear from "~/components/apps/Bear";
import VSCode from "~/components/apps/VSCode";
import Finder from "~/components/apps/Finder";
import Calculator from "../components/apps/Calculator";

const apps = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/apps.png",
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    show: false,
    width: 860,
    height: 500,
    img: "img/icons/bear.png",
    content: <Bear />,
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />,
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    img: "img/icons/vscode.png",
    content: <VSCode />,
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    show: false,
    img: "img/icons/facetime.png",
    height: 530,
    content: <FaceTime />,
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: false,
    img: "img/icons/cmd.png",
    content: <Terminal />,
  },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "mailto:renovamenzxh@gmail.com",
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/Renovamen/playground-macos",
  },

  {
    id: "finder",
    title: "Finder",
    desktop: true,
    width: 860,
    height: 500,
    img: "img/icons/filefinder.png",
    content: <Finder />,
  },
  {
    id: "calculator",
    title: "Calcuator",
    desktop: true,
    width: 402,
    height: 526,
    img: "img/icons/calculator.png",
    content: <Calculator />,
  },
];

export default apps;
