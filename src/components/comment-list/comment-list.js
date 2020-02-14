import React, { Component } from 'react';
import CommentListItem from '../comment-list-item';
import {connect} from 'react-redux';
import {withFakeService} from '../hoc';
import {commentsLoaded , postChosen} from '../../actions';
import {withRouter} from 'react-router-dom';


import './comment-list.css';

class CommentList extends Component {

    componentDidMount(){
        const id = +this.props.match.params.id;

        const {fakeService} = this.props;

        fakeService.getPost(id).then((post) => {
            this.props.postChosen(post);
        });

        fakeService.getComments(id).then((comments) => {
            this.props.commentsLoaded(comments)
        });
    }

    onDelete = () => {
        const {fakeService} = this.props;
        const {id} = this.props.match.params;

        fakeService.deletePost(id);
    };

    onEdit = () => {
        const {fakeService} = this.props;
        const {id} = this.props.match.params;

        const changedPost = {
            id: id,
            title: 'foo',
            body: 'bar',
            userId: 1
        }

        fakeService.changePost(id, changedPost);
    };

    render(){
        let {comments} = this.props;

        const {post} = this.props;

        if(comments === undefined){
            comments = [];
        }

        const {title, body} = post;

        return (
            <div>
                <h3 className="description">Post</h3>
                <div className="post-details">
                    <div className="post-details-title">{title}</div>
                    <div className="post-details-body">{body}</div>
                </div>
                <div className="buttons">
                    <div className="edit-button" onClick={this.onEdit}>
                        Edit
                    </div>
                    <div className="delete-button" onClick={this.onDelete}>
                        Delete
                    </div>
                </div>
                <h3 className="description">Comments:</h3>
                <ul className="comment-list">
                    {
                        comments.map((comment) => {
                            return (
                                <li key={comment.id}><CommentListItem comment={comment}/></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({comments, post}) => {
    return {comments, post};
};

const mapDispatchToProps = (dispatch) => {
    return {
        commentsLoaded: (id) => dispatch(commentsLoaded(id)),
        postChosen: (id) => dispatch(postChosen(id))
    }
}

export default withRouter(withFakeService()(
    connect(mapStateToProps, mapDispatchToProps)(CommentList))
);