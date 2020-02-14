import React from 'react';
import {withRouter} from 'react-router-dom';
import {withFakeService} from '../../hoc';

import './addpost-page.css';

const AddPostPage = ({match, fakeService}) => {
    const {id} = match.params;

    const onSubmit = (e) => {
        
        const newPostTitle = document.getElementById('add-title').value;
        const newPostBody = document.getElementById('add-body').value;

        const newPost = {
            title: newPostTitle,
            body: newPostBody,
            userId: id
        };

        fakeService.addPost(newPost);
    }


    return (
        <div className="form-container">
            <h3>UserId: {id}</h3>
            <form className="form-post" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="add-title">Title: </label>
                    <input type="text" id="add-title" 
                        placeholder="Title..."
                        onChange={() => {}}
                        >
                    </input>
                </div>
                <div className="text-area">
                    <label htmlFor="add-body">Body: </label>
                    <textarea type='textarea' id="add-body"
                        placeholder="Text.." onChange={() => {}}>
                    </textarea>
                </div>
                <button className="post-button">
                    Post
                </button>
                
            </form>
        </div>
    )
};

export default withRouter(withFakeService()(AddPostPage));