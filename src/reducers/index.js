const initialState = {
    users: [], 
    posts: [],
    comments: [],
    post: [],
    userChosen: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'USERS_LOADED':
            return {
                ...state,
                users: action.payload
            };
            
        case 'POSTS_LOADED': 
            return {
                ...state,
                posts: action.payload
            };
        
        case 'COMMENTS_LOADED':
            return {
                ...state,
                comments: action.payload
            };
        
        case 'POST_CHOSEN':
            return {
                ...state,
                post: action.payload
            }
        
        default: 
            return state;
    }
};

export default reducer;