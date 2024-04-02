import axios from "axios";
import { LoginType, RegisterType } from "../@types/types";

export const baseUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";
export const usersUrl = `${baseUrl}/users`;
export const loginUrl = `${usersUrl}/login`;

export function login(data: LoginType) {
  return axios.post(loginUrl, data);
}

export function register(data: RegisterType) {
  return axios.post(usersUrl, data);
}

export const auth = { register, login };
