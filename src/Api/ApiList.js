export const LIST = "LIST";

export default {
    [LIST]: "/list/{{city}}_list.js"
};

console.log("环境：", process.env.REACT_APP_API_ENV);
export const API_DOMAIN = () => {
    switch (process.env.REACT_APP_API_ENV) {
        case "mock":
            return "/api/toa-mgw/rest/webgateway";
        case "test":
            return "https://toa-gp-dmzstg1.pingan.com.cn:10189/toa-mgw/rest/webgateway";
        case "pro":
            return `${window.location.origin}/toa-mgw/rest/webgateway`;
        default:
            return "./";
    }
};
export const FILE_DOMAIN = () => {
    switch (process.env.REACT_APP_API_ENV) {
        case "mock":
            return "/api/yizhangtong/static/app/ccma/data/v2.2";
        case "test":
            return "https://toa-gp-dmzstg1.pingan.com.cn:10189/yizhangtong/static/app/ccma/data/v2.2";
        case "pro":
            return `${window.location.origin}/res/m/ccma/data`;
        default:
            return "./";
    }
};
