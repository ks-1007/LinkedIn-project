import axios from "axios"
import { STORE_TOKEN } from "./actionTypes"

export const storeToken = (payload) => {
  return {
    type: STORE_TOKEN,
    payload,
  }
}

// while creating user
export const createUser = (payload) => (dispatch) => {
  return axios
    .post("http://localhost:8010/users", payload)
    .then(({ token }) => {
      dispatch(storeToken(token))
    })
    .catch((err) => {
      console.log("err:", err)
    })
}
