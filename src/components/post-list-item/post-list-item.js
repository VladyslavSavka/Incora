import React from 'react';
import {withRouter} from 'react-router-dom';

import './post-list-item.css';

const PostListItem = ({post, history}) => {
    const {title, body, id} = post;
    return (
        <div className='post-list-item'>
            <div className="post">
                <div className="post-title">{title}</div>
                <div className="post-body">{body}</div>
            </div>
            <div className="details-button" onClick={() => history.push(`/comments-post/${id}`)}>
                Details
            </div>
        </div>
    )
}

export default withRouter(PostListItem);