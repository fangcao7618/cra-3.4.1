const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:6000", // 请求接口地址
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
    })
  );
};
