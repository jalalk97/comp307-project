import { createListenerMiddleware } from "@reduxjs/toolkit";
import { loginListeners } from "../features/auth/authSlice";

export const listenerMiddleware = createListenerMiddleware();

loginListeners(listenerMiddleware.startListening);
