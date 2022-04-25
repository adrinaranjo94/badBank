import { service } from "../core/axios";

const apiRoute = "/auth";

export const authServices = {
  logIn: (email, password) =>
    service.post(`${apiRoute}/login`, { email, password }),
  signIn: (email, username, password) =>
    service.post(`${apiRoute}/signin`, { email, username, password }),
};
