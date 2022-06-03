const searchPostReducer = (state='', action) =>{
    switch (action.type) {
        case 'SEARCHPOST': return action.payloader
            break;
        default: return state
            break;
    }
}

export default searchPostReducer