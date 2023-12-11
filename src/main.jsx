import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import LoginPage from "./pages/LoginPage/index.jsx";
import RegisterPage from "./pages/RegisterPage/index.jsx";

import "./assets/css/nullstyle.css";
import "./assets/css/index.css";

import "./firebase.js";

import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
