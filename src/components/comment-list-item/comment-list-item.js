import React from 'react';

import './comment-list-item.css';

const CommentListItem = ({comment}) => {
    const {name, email, body} = comment;
    return (
        <div className="comment-item">
            <h3>{name}</h3>
            <p className="comment-email">{email}</p>
            <p>{body}</p>
        </div>
    )
};

export default CommentListItem;