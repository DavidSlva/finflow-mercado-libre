import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CreditCondition from "./components/views/CreditCondition";
import "semantic-ui-css/semantic.min.css";
import CreditoPrincipal from "./components/views/CreditoPrincipal";
import { Segment } from "semantic-ui-react";
import HouseSearch from "./components/containers/HouseSearch";
// import HouseSearch from "./components/views/HouseSearch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Segment className="bordered-box" attached="bottom">
      <CreditCondition />
    </Segment> */}
    <Segment className="bordered-box" attached="bottom">
      <CreditoPrincipal />
    </Segment>
    <Segment>
      <HouseSearch />
    </Segment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
