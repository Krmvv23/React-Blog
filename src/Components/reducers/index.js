import { combineReducers } from 'redux'
import onlineUserReducer from './onlineuser'
import allPostsReducer from './allposts'
import searchPostReducer from './searchpost'

const allReducer = combineReducers(
    {
        onlineUserReducer: onlineUserReducer,
        allPostsReducer: allPostsReducer,
        searchPostReducer: searchPostReducer
    }
)

export default allReducer