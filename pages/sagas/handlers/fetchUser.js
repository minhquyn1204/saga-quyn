import {ActionTypes} from "../../constants/ActionTypes";

import { take, takeEvery, takeLatest, put, call, delay } from "@redux-saga/core/effects";

import { loadUserError, loadUserSuccess, createUserSuccess, createUserError, deleteUserSuccess, deleteUserError, UpdateUserSuccess, UpdateUserError } from "../../actions/getUsers";
import { loadUserApi, createUserapi,deleteUserapi , updateUserapi } from "../../api";

export function* onLoadUsersStartAsync(){
        try{
            const response = yield call(loadUserApi);
            console.log(response);
            if(response.status === 200){
                yield delay(500);
                yield put(loadUserSuccess(response.data))
            }
        }catch(error){
            yield put(loadUserError(error.response.data))
        }
}
export function* onCreateUsersStartAsync({payload}){
    try{
        const response = yield call(createUserapi,payload);
        console.log(response);
        if(response.status === 200){
            yield put(createUserSuccess(response.data))
        }
    }catch(error){
        yield put(createUserError(error.response.data))
    }
}
export function* onDeleteUsersStartAsync(userId){
             try{
        const response = yield call(deleteUserapi,userId);
        console.log(response);
        if(response.status === 200){
            yield delay(500);
            yield put(deleteUserSuccess(userId))
        }
    }catch(error){
        yield put(deleteUserError(error.response.data))
    }
}

        function* onUpdateUsersStartAsync ({payload: {id, formValue}}) {
            try {
                const response = yield call(updateUserapi, id, formValue );
                if(response.status === 200) {
                    yield put(UpdateUserSuccess())
                }
            } catch (error) {
                yield put(UpdateUserError(error.response.data))
            }
        }

export function* onDeleteUser(){
    while(true){
        const{payload:userId} = yield take(ActionTypes.DELETE_USER_START);
        yield call(onDeleteUsersStartAsync, userId)
    }
}

export function* onLoadUser(){
    yield takeEvery(ActionTypes.LOAD_USER_START, onLoadUsersStartAsync)
}

export function* onCreateUser(){
    yield takeLatest(ActionTypes.CREATE_USER_START, onCreateUsersStartAsync)
}

export function* onUpdateUser(){
    yield takeEvery(ActionTypes.UPDATE_USER_START, onUpdateUsersStartAsync)
}

