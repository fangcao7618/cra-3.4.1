/*
 * @Description: 格式化及数据
 * @version:
 * @Author: WFC
 * @Date: 2019-11-18 14:23:41
 * @LastEditors: WFC
 * @LastEditTime: 2019-11-25 18:45:33
 */
import {
    sexList, // 孩子性别
    guaranteeList, //保障金额
    strichenList, // 附加重疾保额
    paymentList, // 交费方式
    compensationList, //重疾选择 是 否
    exemptionList, //选择豁免 是 否
    guaranteeperiodList //保障期限
} from "./ChildrenInsuranceData";
import produce from "immer";
import { set, has } from "lodash";
export const nowTimeStamp = Date.now();
export const now = new Date(nowTimeStamp);

export function enhancedReducer(state, updateArg) {
    //检查updateArg参数是否是回调函数
    if (updateArg.constructor === Function) {
        return {
            ...state,
            ...updateArg(state)
        };
    }
    //如果updateArg参数是对象
    if (updateArg.constructor === Object) {
        //如果updateArg对象中有_path和_value这两个key
        //那就用他们更新深层对象值
        if (has(updateArg, "_path") && has(updateArg, "_value")) {
            const { _path, _value } = updateArg;

            return produce(state, draft => {
                set(draft, _path, _value);
            });
        } else {
            return {
                ...state,
                ...updateArg
            };
        }
    }
}

export {
    sexList, // 孩子性别
    guaranteeList, //保障金额
    strichenList, // 附加重疾保额
    paymentList, // 交费方式
    compensationList, //重疾选择 是 否
    exemptionList, //选择豁免 是 否
    guaranteeperiodList
};
