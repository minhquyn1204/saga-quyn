import {ActionTypes} from '../constants/ActionTypes'

const initialState = {
    users: [],
    loading:false,
    error:null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_USER_START:
        case ActionTypes.CREATE_USER_START:
        case ActionTypes.DELETE_USER_START:
            return{
                ...state,
                loading:true}
        case ActionTypes.LOAD_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload}
        case ActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading:false,
            }
        case ActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state.error,
                loading:false,
                users:state.users.filter((user)=>user.id !== action.payload),
            }
        case ActionTypes.LOAD_USER_ERROR:
        case ActionTypes.CREATE_USER_ERROR:
        case ActionTypes.LOAD_USER_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload}
        default:
            return state
    }
}
export default usersReducer;