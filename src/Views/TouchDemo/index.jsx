import { useEffect } from "react";
import "./index.scss";
function touchHandler(e) {
  let ball = document.getElementById("ball");
  let desc = document.getElementById("desc");
  let type = e.type;

  if (type !== "touchend") {
    let pos = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };

    ball.style.left = pos.x + "px";
    ball.style.top = pos.y + "px";
    desc.innerHTML = `${e.type}(clientX:${pos.x},clientY:${pos.y})`;
  } else {
    desc.innerHTML = e.type;
  }
  switch (type) {
    case "touchstart":
      ball.style.display = "block";
      break;
    case "touchmove":
      //andriod 4.4.4 只触发touchstart,和一次的touchmove,touchen不触发
      if (e.cancelable) {
        console.log("cancelable");
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
          console.log("defaultPrevented");
          e.persist();
          //   e.preventDefault();
          //   e.stopPropagation();
        }
      }
      break;
    case "touchend":
      ball.style.display = "block";
      break;
    default:
      break;
  }
}
function TouchDemo() {
  useEffect(() => {}, []);
  return (
    <div className="TouchPadDemo">
      <div id="desc"></div>
      <div
        id="touchPad"
        className="touchpad"
        onTouchStart={touchHandler}
        onTouchMove={touchHandler}
        onTouchEnd={touchHandler}
      >
        触摸板
      </div>
      <div id="ball" className="ball"></div>
    </div>
  );
}

export default TouchDemo;
