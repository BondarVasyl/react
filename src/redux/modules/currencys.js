import {  handleActions } from 'redux-actions'
import { resolve, request, reject } from 'redux-promised'


// ------------------------------------
// Constants
// ------------------------------------
export const NAMESPACE = 'currencys'
export const GET_CURRENCY = NAMESPACE+'/'+'GET_CURRENCY'
const url  = 'http://km.softbistro.online:20080/coins/'


// ------------------------------------
// Actions
// ------------------------------------
const getCurrency = () => {
    return{
        type: GET_CURRENCY,
        meta: { promise: true },
        payload: fetch(url,{
            method: 'GET',
            mode:'cors'
        }).then(response=>response.json())
    }
}

export const actions = {
    getCurrency,
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [resolve(GET_CURRENCY)]: (state, { payload }) => {
        return{...state, data:payload, dataFethcing:false}
    },
    [reject(GET_CURRENCY)]: (state, { payload }) => ({...state, data:null, dataFethcing:false}),
    [request(GET_CURRENCY)]: (state, { payload }) => ({...state, data:null, dataFethcing:true}),
},{reversed:false})

// ------------------------------------
// Helpers
// ------------------------------------



