import { STORE_TOKEN, STORE_USER } from "./actionTypes"

const getToken = localStorage.getItem("token")

const initState = {
  email: null,
  token: getToken || null,
  user: {},
  isLoading: false,
  isError: false,
}

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case STORE_TOKEN:
      return {
        ...state,
        token: payload,
      }
    case STORE_USER:
      return {
        ...state,
        user: payload,
      }
    default:
      return state
  }
}
