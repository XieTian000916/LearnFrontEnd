const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("有人请求myserve");
  console.log("请求的资源是:", request.url);
  console.log("请求来自于:", request.get("Host"));
  next();
});

app.get("/mydata", (request, response) => {
  const mydata = [
    { id: 001, name: "aaa", age: 18 },
    { id: 002, name: "bbb", age: 19 },
    { id: 003, name: "ccc", age: 20 },
  ];
  response.send(mydata);
});

app.listen(5000, (err) => {
  if (!err)
    console.log(
      "服务器启动成功，请求数据的地址为:http://localhost:5000/mydata"
    );
});
