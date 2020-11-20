import { useEffect } from "react";
import "./index.scss";

//获取touch的点（兼容mouse事件）
const getTouchPos = (e) => {
  let touches = e.touches;
  if (touches && touches[0]) {
    return {
      x: touches[0].clientX,
      y: touches[0].clientY,
    };
  }
  return { x: e.clientX, y: e.clientY };
};
//计算亮点之间的距离
const getDist = (p1, p2) => {
  if (!p1 || !p2) {
    return 0;
  }
  return Math.sqrt(
    (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)
  );
};
//获取两点之间所成的角度
// const getAngle = (p1, p2) => {
//   let r = Math.atan2(p2.y - p1.y, p2.x - p1.x),
//     a = (r * 180) / Math.PI;
//   return a;
// };
//获取swipe的方向
const getSwipeDirection = (p1, p2) => {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  let angle = (Math.atan2(dy, dx) * 180) / Math.PI;

  if (angle < 45 && angle > -45) {
    return "right";
  }
  if (angle >= 45 && angle < 135) {
    return "top";
  }
  if (angle >= 135 && angle > -135) {
    return "left";
  }
  if (angle >= -135 && angle <= -45) {
    return "bottom";
  }
};

let SWIPE_DISTANCE = 30; //移动30px之后才认为swiper时间
let SWIPE_TIME = 500; //swipe最大经历时间
let point_start, point_end, time_start, time_end;

//记录touchstart开始时间和位置
function startEvtHandler(e) {
  let pos = getTouchPos(e);
  let ball = document.getElementById("ball"),
    desc = document.getElementById("desc");
  console.log("=======99999", ball);
  ball.style.left = pos.x + "px";
  ball.style.top = pos.y + "px";
  ball.style.display = "block";

  var touches = e.touches;
  if (!touches || touches.length === 1) {
    //touches为空，代表鼠标点击
    point_start = getTouchPos(e);
    time_start = Date.now();
  }
  desc.innerHTML = `${e.type}(clientX:${pos.x},clientY:${pos.y})`;
}
function moveEvtHandler(e) {
  let pos = getTouchPos(e);
  let ball = document.getElementById("ball");
  ball.style.left = pos.x + "px";
  ball.style.top = pos.y + "px";

  point_end = getTouchPos(e);
  // e.preventDefault();
  e.persist();
}
//touchend的touches和targetTouches没有对象，只有changeTouches才有
function endEvtHandler(e) {
  let ball = document.getElementById("ball"),
    touchPad = document.getElementById("touchPad");
  ball.style.display = "none";
  time_end = Date.now();

  if (
    getDist(point_start, point_end) > SWIPE_DISTANCE &&
    time_start - time_end < SWIPE_TIME
  ) {
    let dir = getSwipeDirection(point_end, point_start);
    touchPad.innerHTML = "swipe" + dir;
  }
}
function TouchDemo() {
  useEffect(() => {
    document.querySelector("#id-checkbox").addEventListener(
      "click",
      function (event) {
        document.getElementById("output-box").innerHTML +=
          "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
        document.querySelector("#id-checkbox").checked = true;
        event.preventDefault();
        console.log(document.querySelector("#id-checkbox").checked);
      },
      false
    );
  }, []);
  return (
    <div className="TouchPadDemo">
      <div id="desc"></div>
      <div
        id="touchPad"
        className="touchpad"
        onTouchStart={startEvtHandler}
        onTouchMove={moveEvtHandler}
        onTouchEnd={endEvtHandler}
        onMouseDown={startEvtHandler}
        onMouseMove={moveEvtHandler}
        onMouseUp={endEvtHandler}
      >
        触摸板
      </div>
      <div id="ball" className="ball"></div>
      <p>Please click on the checkbox control.</p>

      <form>
        <label htmlFor="id-checkbox">Checkbox:</label>
        <input type="checkbox" id="id-checkbox" />
      </form>

      <div id="output-box"></div>
    </div>
  );
}

export default TouchDemo;
