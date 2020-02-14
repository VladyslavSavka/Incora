import React from 'react';
import {withRouter} from 'react-router-dom';

import './user-list-item.css';

const UserListItem = ({user, history}) => {
    const {name, username, email, phone , website, id} = user;

    return (
        <div className="user-list-item">
            <div>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
                <div>Website: {website}</div>
            </div>
            <div className="link-posts" onClick={() => history.push(`/posts/${id}`)}>
                Posts
            </div>
        </div>
    )
}


export default withRouter(UserListItem);