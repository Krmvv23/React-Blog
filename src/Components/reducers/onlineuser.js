const onlineUserReducer = (state = {} , action) =>{
    switch (action.type) {
        case 'ONLINEUSER': return action.payloader
            break;
        default: return state
            break;
    }
}

export default onlineUserReducer