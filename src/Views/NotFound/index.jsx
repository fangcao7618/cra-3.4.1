/*
 * @Description: 404页面
 * @version:
 * @Author: WFC
 * @Date: 2019-04-29 11:05:53
 * @LastEditors: WFC
 * @LastEditTime: 2019-05-24 18:07:29
 */
import React from "react";
import "./index.css";

export default class Error extends React.PureComponent {
    render() {
        return (
            <div className="panfish">
                404
                <img alt="" src={require("./404.png")} />
                <img className="two" alt="" src={require("./1.png")} />
                <img alt="" src={require("./2.png")} />
                <img alt="" src={require("./3.png")} />
                {/* <div
                    className="back"
                    onClick={() => {
                        window.location.href = "./";
                    }}
                >
                    回到首页
                </div> */}
                <div
                    className="back"
                    onClick={() => {
                        window.history.back(-1);
                    }}
                >
                    回到上一页
                </div>
            </div>
        );
    }
}
