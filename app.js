const express = require('express');
const app = express();
const router=require("../src/routers/routes")
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.listen(8000, "127.0.0.1", () => {
    console.log("listening on port 3000");
})