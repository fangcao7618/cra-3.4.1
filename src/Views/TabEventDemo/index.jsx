import { useEffect } from "react";
import { Button, Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
let start = 0,
  end = 0;

function TouchStart(e) {
  start = new Date();
}
function TouchEnd(e) {
  // e.preventDefault();
  // e.stopPropagation();
}
function ClickDemo(e) {
  console.log(e);
  end = new Date();
  document.getElementById("clickTime").innerHTML = `${end - start}ms`;
}
function TapDemo(e) {
  console.log(e);
  end = new Date();
  document.getElementById("tapTime").innerHTML = `${end - start}ms`;

  //   document.getElementById("mod").className = "";
}
function ModClickDemo(e) {
  console.log(e);
  //   document.getElementById("mod").className = "hide";
  document.getElementById("mod2").className = "bgMod hide";
}
function Tap() {
  useEffect(() => {
    return {};
  }, []);
  return (
    <div>
      <p>
        自定义Tap事件原理：
        在touchstart、touchend时记录时间、手指位置，在touchend时进行比较，如果手指位置为同一个位置（或允许移动一个非常小的位移值）且时间间隔较短（一般认为是200ms）,
        且过程中未曾触发过touchmove，即可认为触发了手持设备上的"click"，一般称它为"tap".
      </p>
      <div id="mod2" className="bgMod">
        <div id="mod" onTouchEnd={ModClickDemo}></div>
      </div>
      {/* 3、“上下”都使用tap事件，原理上解决tap透传事件（但不可避免原声标签的click事件） */}
      {/* <div id="mod" onClick={ModClickDemo}></div> */}
      <Button
        color="danger"
        onTouchStart={TouchStart}
        onTouchEnd={TouchEnd}
        onClick={ClickDemo}
      >
        click me
      </Button>
      <Alert id="clickTime">0</Alert>
      <br />
      <Button
        color="primary"
        onTouchStart={TouchStart}
        onTouchEnd={TouchEnd}
        onClick={TapDemo}
      >
        tap me
      </Button>
      <Alert id="tapTime">0</Alert>
      <p>梦层消失，300ms 延迟，被底下的接收掉 透传</p>、、、
      <p>
        解决方案： 1、使用缓动动画，过渡300ms的延迟
        <br />
        2、中间层dom元素的加入，让中间层接受这个“穿透”事件，稍后隐藏
        <br />
        3、“上下”都使用tap事件，原理上解决tap透传事件（但不可避免原声标签的click事件）
        <br />
        4、改用Fastclick的库（听过最新的zepto已经fixed掉这个bug）
      </p>
    </div>
  );
}
export default Tap;
