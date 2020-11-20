import gridStyle from "./index.module.css";
function GridDemo() {
  console.log(
    "REACT_APP_BAR---REACT_APP_VERSION",
    process.env.REACT_APP_BAR,
    process.env.REACT_APP_VERSION
  );
  return (
    <div className={gridStyle.page}>
      <div className={gridStyle.page__head}>head</div>
      <div className={gridStyle.page__nav}>nav</div>
      <div className={gridStyle.page__main}>main</div>
      <div className={gridStyle.page__footer}>footer</div>
    </div>
  );
}

export default GridDemo;
