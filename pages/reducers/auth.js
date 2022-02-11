// import { ActionTypes } from "../constants/ActionTypes"

// const initialState = {
//   users: [],
//   loading: false,
//   error: null,
// }

// export default function auth(state = initialState, action) {
//   switch (action.type) {
//     case ActionTypes.GET_USERS_REQUESTED:
//       return {
//         ...state,
//         loading: true,
//       }
//     case ActionTypes.GET_USERS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         users: action.users
//       }
//     case ActionTypes.GET_USERS_FAILED:
//       return {
//         ...state,
//         loading: false,
//         error: action.message,
//       }
//     default:
//       return state
//   }
// }