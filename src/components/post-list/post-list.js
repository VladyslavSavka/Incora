import React, { Component } from 'react';
import PostListItem from '../post-list-item';
import {connect} from 'react-redux';
import {withFakeService} from '../hoc';
import {postsLoaded} from '../../actions';
import {withRouter} from 'react-router-dom';

import './post-list.css';

class PostList extends Component {

    componentDidMount(){
        const id = +this.props.match.params.id;
        
        const {fakeService} = this.props;
        fakeService.getUserPosts(id).then((posts) => {
            this.props.postsLoaded(posts);
        });
    }

    render(){
        let {posts} = this.props;
        if(posts === undefined){
            posts = [];
        }
        const id = this.props.match.params.id;

        return (
            <div className="posts-container">
                <h2>{`Posts of user ${id}`}</h2>
                <div className="addPost-button" 
                    onClick={() => this.props.history.push(`/add-new-post/${id}`)}>
                    Add new!
                </div>
                <ul className="post-list">
                    {
                        posts.map((post) => {
                            return (
                                <li key={post.id}><PostListItem post={post}/></li>
                            )
                        })
                    }
                </ul>
            </div>
            
        )
    }
}

const mapStateToProps = ({posts}) => {
    return {posts};
};

const mapDispatchToProps = {
    postsLoaded
}

export default withRouter(withFakeService()(
    connect(mapStateToProps, mapDispatchToProps)(PostList))
);