/*
storeに保管するべきデータ
すべての予定
今選択されている部屋
*/
import {
    PickableRooms,
    ADD_RESERVATION,
    DELETE_RESERVATION,
    SELECT_PERIOD
} from './actions'
import { combineReducers } from 'redux'


const initialState = {
    pickableRoom: PickableRooms,
    period_start: "",
    period_end: "",
    reservations: []
}

// function reservationApp(state = {}, action) {
//     return {
//         pickableRooms:pickableRooms(state.pickableRooms,action),
//         reservations :reservations(state.reservations,action) 
//     }
// }
// combineReducersを使って書き直しておく

const resarvationApp = combineReducers({
    pickableRooms,
    reservations
})


// stateは各reducerごとに異なるジャンルを指定している

function pickableRooms(state = 'Room_1', action) {
    switch (action.type) {
        case SELECT_PERIOD:
            return action.room
        default:
            return state
    }
}

function reservations(state = [], action) {
    switch (action.type) {
        case ADD_RESERVATION:
            //　この時！古いstateに！actionとstateの値から生成した
            // reservationを連結し！そのまま返す！
            return Object.assign({}, state, {
                reservations: [
                    ...state,
                    {
                        room: state.room,
                        period_start: state.period_start,
                        period_end: state.period_end,
                        content: action.content
                    }
                ]
            })
        default:
            return state
    }
}


