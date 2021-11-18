import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let basicState = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진신발2", quan: 1 },
  { id: 2, name: "멋진신발3", quan: 3 },
];

function reducer(state = basicState, action) {
  if (action.type === "addItem") {
    let copy = [...state];
    let findName = copy.find((i) => {
      return i.name == action.payload.name;
    });
    if (findName) {
      findName.quan++;
      return copy;
    } else {
      copy.push(action.payload);
      return copy;
    }
  } else if (action.type === "addQuan") {
    let copy = [...state];
    console.log(action.payload.id);
    copy[action.payload.id].quan++;

    return copy;
  } else if (action.type === "delQuan") {
    let copy = [...state];
    if (copy[action.payload.id].quan > 0) copy[action.payload.id].quan--;

    return copy;
  } else {
    return state;
  }
}

let alertBasic = true;

function reducer2(state = alertBasic, action) {
  if (action.type === "alertClose") {
    state = false;
    return state;
  }
  return state;
}

let localstorage = [];

function reducer3(state = localstorage, action) {
  return state;
}

let move = 0;

function reducer4(state = move, action) {
  return state;
}

let store = createStore(
  combineReducers({ reducer, reducer2, reducer3, reducer4 })
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/React_ShoppingMall_Demo">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
