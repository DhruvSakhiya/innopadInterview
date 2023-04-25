export const SET_USER = 'SET_USER'
let init = {
    user: null
}

const UserReducer = (state = init, action) => {
    switch (action.type) {
        case SET_USER: {
            console.log('ACTIONS IS FIRED', action.payload)
            return { ...state, user: action.payload.user }
        }
        default:
            return state
    }
}

export default UserReducer

