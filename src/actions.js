// actionタイプ
export const ADD_RESERVATION = 'ADD_RESERVATION'
export const DELETE_RESERVATION = 'DELTE_RESERVATION'
export const SELECT_PERIOD = 'SELECT_PERIOD'

// reservation : {
//     room_id      : 部屋のid(１〜８)
//     period_start : 開始時間
//     period_end   : 終了時間
//     content      : 内容説明
// }



// action creator
export function addReservation(reservation){
    // 予約を作成
    return {type : ADD_RESERVATION,reservation}
}

export function deleteReservation(reservation_id){
    // 予約を削除
    return {type : DELETE_RESERVATION , reservation_id}
}

export function selectPeriod(room_id,period){
    return {type : SELECT_PERIOD , room_id , period}
}