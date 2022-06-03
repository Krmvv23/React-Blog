
export const onlineUser = (obj) => {
    return {
        type: 'ONLINEUSER',
        payloader: obj
    }
}

export const allPosts = (obj) => {
    return {
        type: 'ALLPOSTS',
        payloader: obj
    }
} 

export const searchPost = (val)=>{
    return{
        type:'SEARCHPOST',
        payloader: val
    }
}