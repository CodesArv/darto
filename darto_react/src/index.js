import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./stores/store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// import HttpsRedirect from "react-https-redirect";
let persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
    {/* <HttpsRedirect> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    {/* </HttpsRedirect> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
