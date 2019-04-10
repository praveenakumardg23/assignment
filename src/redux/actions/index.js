import { routerMiddleware, push } from 'react-router-redux'


export const ASSIGNMENT = {
    onLoginSuccess: 'ON_LOGIN_SUCCESS'
}

export const onLoginSuccess = (data) => {
    return {
        type: ASSIGNMENT.onLoginSuccess,
        data
    }
}

export function login(data) {
    return (dispatch) => {
        if (data.userName === 'hruday@gmail.com' && data.password === 'hruday123') {
            dispatch(onLoginSuccess(true));
            dispatch(push('/dashboard'))
        }
    }
    
}