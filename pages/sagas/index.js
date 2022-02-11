import {all} from 'redux-saga/effects';
import {onLoadUser,onCreateUser,onDeleteUser} from './handlers/fetchUser';

export default function* rootsaga(){
    yield all([onLoadUser(),onCreateUser(),onDeleteUser()])
}