const http = require("http");
const https = require("https");

const httpGet = siteUrl => {
  const getter = siteUrl.slice(0, 5) === "https" ? https.get : http.get;
  return new Promise((resolve, reject) => {
    getter(siteUrl, response => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", chunk => (body += chunk));
      response.on("error", err => reject(err));
      response.on("end", () => resolve({ status: response.statusCode, body }));
    });
  });
};

module.exports = httpGet;
