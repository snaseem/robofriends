import React from "react";
import ReactDOM from "react-dom";
import { provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { searchRobots } from "./reducers";

const store = createStore(searchRobots);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
