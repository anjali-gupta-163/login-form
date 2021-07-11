export const SET_LOGIN_DETAILS = 'SET_LOGIN_DETAILS';

export function setDetails(items){
    return{
        type: SET_LOGIN_DETAILS,
        items
    }
}