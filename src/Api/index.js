import axios from "axios";
import ApiList, { LIST } from "./ApiList";
import GPCommonParams from "./GPCommonParams";

const request = (method, fileType) => action => (params = {}) => {
    let url = `${FILE_DOMAIN()}${action}`,
        data = {},
        config = {};
    if (fileType === "csv") {
        url = `${FILE_DOMAIN()}${action.replace("{{city}}", params.city)}`;
    } else {
        url = API_DOMAIN();
        data = {
            operationType: ApiList[action],
            requestData: JSON.stringify([
                GPCommonParams,
                {
                    ...params
                }
            ])
        };
    }

    return axios(
        {
            method,
            url,
            data:
                "operationType=" +
                data.operationType +
                "&requestData=" +
                data.requestData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        },
        config
    );
};

const requestCSV = request("get", "csv");
const requestGP = request("post", "json");

//根据城市获取信用卡商品列表
const requestActivityMallList = requestCSV(ApiList[LIST]);
export default {
    requestActivityMallList
};
