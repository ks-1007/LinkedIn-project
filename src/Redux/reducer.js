import { STORE_TOKEN } from "./actionTypes"

const getToken = localStorage.getItem("token")

const initState = {
  email: null,
  token: getToken || null,
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
    default:
      return state
  }
}
