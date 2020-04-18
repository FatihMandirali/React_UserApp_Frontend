import React, { Component } from 'react'
import PropType from 'prop-types'
import { connect } from 'react-redux'
import UserList from '../UserList'
import {fetchUsers} from '../../actions/users';


class UserPage extends Component {
   
    static propTypes = {
        users: PropType.object.isRequired
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <UserList users={this.props.users}></UserList>
            </div>
        );
    }
}
const mapStateToProps = ({ users }) => {
    console.log(users);

    return {
        users // users:users demek oluyor
    }
};

const mapDispatchToProps={
    fetchUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPage);