import Button from "antd/lib/button/button";
import "antd/lib/button/style/index.css";
import "antd/lib/style/index.css";
import React = require("react");
import ReactDOM = require("react-dom");
import { BrowserRouter } from "react-router-dom";

const browserRouter = (
    <BrowserRouter>
        <Button type="primary" icon="twitter" >Hit me</Button>
    </BrowserRouter>);

ReactDOM.render(browserRouter, document.getElementById("root"));
