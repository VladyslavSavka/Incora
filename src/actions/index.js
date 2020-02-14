const usersLoaded = (usersList) => {
    return {
        type: 'USERS_LOADED',
        payload: usersList
    };
};

const postsLoaded = (postList) => {
    return {
        type: 'POSTS_LOADED',
        payload: postList
    };
};

const commentsLoaded = (comments) => {
    return {
        type: 'COMMENTS_LOADED',
        payload: comments
    };
};

const postChosen = (post) => {
    return {
        type: 'POST_CHOSEN',
        payload: post
    }
};

export {
    usersLoaded,
    postsLoaded,
    commentsLoaded,
    postChosen
};