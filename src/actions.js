// actionタイプ
export const ADD_RESERVATION = 'ADD_RESERVATION'
export const DELETE_RESERVATION = 'DELTE_RESERVATION'
export const SELECT_PERIOD = 'SELECT_PERIOD'

// reservation : {
//     room      : 部屋
//     period_start : 開始時間
//     period_end   : 終了時間
//     content      : 内容説明
// }

export const PickableRooms = {
    // 選択可能な部屋
    Room_1 : 'Room_1',
    Room_2 : 'Room_2',
    Room_3 : 'Room_3'
}


// action creator
export function addReservation(content){
    // 予約を作成
    return {type : ADD_RESERVATION,content}
}

export function deleteReservation(reservation_id){
    // 予約を削除
    return {type : DELETE_RESERVATION , reservation_id}
}

export function selectPeriod(room,period){
    return {type : SELECT_PERIOD , room , period}
}