import {  all } from 'redux-saga/effects'
import { authsaga } from './auth.saga'


export function* rootSaga(){
    yield all([
        authsaga()
    ])
}