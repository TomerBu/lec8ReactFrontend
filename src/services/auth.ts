import axios from "axios";
import { RegisterType } from "../@types/types";

export const baseUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";
export const usersUrl = `${baseUrl}/users`;

export function register(data: RegisterType) {
  //return fetch(usersUrl, {method: "POST", body: JSON.stringify(data)});
  return axios.post(usersUrl, data);
}

export const auth = { register };
