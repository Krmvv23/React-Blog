const allPostsReducer = (state = {}, action)=>{
    switch (action.type) {
        case 'ALLPOSTS': return action.payloader
            break;
        default: return state
            break;
    }
}

export default allPostsReducer