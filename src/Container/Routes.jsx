import Loadable from "@loadable/component"; //https://loadable-components.com/docs/loadable-vs-react-lazy/
// import LoadingPage from "../Views/LoadingPage";
// import Loadable from "react-loadable";

// const LoadableComponent = (path) =>
//   Loadable({
//     loader: () => import(`../Views/${path}`),
//     loading: LoadingPage,
//   });
// const LoadableComponent = (path) => {
//   console.log("path======", path);
//   return React.lazy(() => import(`../Views/${path}`));
// };
const LoadableComponent = (path) => Loadable(() => import(`../Views/${path}`));
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/",
    exact: true,
    component: LoadableComponent("App/App"),
    title: "test",
  },
  {
    path: "/loading",
    component: LoadableComponent("LoadingPage"),
    title: "加载页面",
  },
  {
    path: "/children",
    exact: true,
    component: LoadableComponent("CheckboxList"),
    title: "少儿险",
  },
  {
    path: "/router",
    exact: true,
    component: LoadableComponent("RouterDemo"),
    title: "少儿险",
  },
  {
    path: "/router2",
    exact: true,
    component: LoadableComponent("RouterDemo/index2.jsx"),
    title: "少儿险",
  },
  {
    path: "/xiborder",
    exact: true,
    component: LoadableComponent("XiBorder"),
    title: "少儿险",
  },
  {
    path: "/recoil",
    exact: true,
    component: LoadableComponent("Recoil"),
    title: "少儿险",
  },
  {
    path: "/tap",
    exact: true,
    component: LoadableComponent("TabEventDemo"),
    title: "Tab事件",
  },
  {
    path: "/touch",
    exact: true,
    component: LoadableComponent("TouchDemo"),
    title: "Touch事件",
  },
  {
    path: "/touch2",
    exact: true,
    component: LoadableComponent("TouchDemo/index2.jsx"),
    title: "Touch事件",
  },
  {
    path: "/scroll",
    exact: true,
    component: LoadableComponent("ScrollTan"),
    title: "scroll事件",
  },
  {
    path: "/flex",
    exact: true,
    component: LoadableComponent("Flex"),
    title: "flex布局",
  },
  {
    path: "/grid",
    exact: true,
    component: LoadableComponent("Grid"),
    title: "grid布局",
  },
];
