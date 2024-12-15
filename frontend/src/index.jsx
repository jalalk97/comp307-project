import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import { store } from "./app/store";
import { userLoggedIn } from "./features/auth/authSlice.js";

const token = localStorage.getItem("token");
if (token) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  store.dispatch(userLoggedIn(token, currentUser));
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
