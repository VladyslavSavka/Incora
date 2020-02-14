import React, { Fragment } from 'react';
import UsersPage from '../pages/users-page';
import PostsPage from '../pages/posts-page';
import AddPostPage from '../pages/addpost-page';
import CommentPage from '../pages/comment-page';
import {Route, Switch} from 'react-router-dom';

import './app.css';


const App = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={UsersPage} />
                <Route path="/posts/:id" component={PostsPage}/>
                <Route path="/comments-post/:id" component={CommentPage}/>
                <Route path='/add-new-post/:id' component={AddPostPage} />
            </Switch>
        </Fragment>
    )
}

export default App;