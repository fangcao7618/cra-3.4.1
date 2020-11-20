import React from "react";
import "./index.css";
import logo from "../../Assets/images/ChildrenInsurance/1.png";
function ScrollB() {
  let numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  return (
    <div>
      <div>
        body层滚动：（系统特殊化处理）
        <br />
        自带弹性滚动，overflow:hidden 失效，GIF和定时器暂停
        <br />
        局部滚动： 没有弹性滚动，没有滚动惯性，不流程
        <br />
        <div className="jubu">
          {numbers.map((item, index) => (
            <img key={index} src={logo} className="App-logo" alt="logo" />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ScrollB;
