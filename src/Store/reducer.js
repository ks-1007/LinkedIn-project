import { STORE_TOKEN } from "./actionTypes"

const initState = {
  email: null,
  token: null,
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
