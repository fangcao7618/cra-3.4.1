/*
 * @Description: loading加载页面
 * @version:
 * @Author: WFC
 * @Date: 2019-04-24 15:46:01
 * @LastEditors: WFC
 * @LastEditTime: 2019-04-24 15:46:01
 */
/*
 * @Description: loading加载页面
 * @version:
 * @Date: 2019-04-24 15:46:01
 * @LastEditTime: 2019-05-24 18:07:46
 */
import React from "react";
import Loading from "../../Components/Loading";
import loadingModule from "./index.module.css";
const LoadingPage = () => {
  return (
    <div className={loadingModule.loader}>
      <Loading />
    </div>
  );
};
export default LoadingPage;
