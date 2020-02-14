import React, {Component} from 'react';
import UserListItem from '../user-list-item';
import {connect} from 'react-redux';
import {withFakeService} from '../hoc';
import {usersLoaded} from '../../actions';

import './users-list.css';

class UsersList extends Component {

    componentDidMount(){
        const {fakeService} = this.props;
        fakeService.getUsers().then((users) => {
            this.props.usersLoaded(users)
        });
    }
    
    render(){
        const {users} = this.props;

        return (
            <ul className='users-list'>
                {
                    users.map((user) => {
                        return (
                            <li key={user.id}><UserListItem user={user}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {users};
};

const mapDispatchToProps =  {
    usersLoaded
};

export default withFakeService()(
    connect(mapStateToProps, mapDispatchToProps)(UsersList)
);