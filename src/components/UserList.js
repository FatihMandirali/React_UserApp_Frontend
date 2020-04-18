import React, { Component } from 'react'
import PropType from 'prop-types'
import UserCard from '../components/UserCard'
import { Grid } from 'semantic-ui-react'
import { HashLoader } from "react-spinners";
class UserList extends Component {
    state = {

    }



    static propTypes = {
        users: PropType.object.isRequired
       
       // users: PropType.shape({ users: PropType.array.isRequired }).isRequired
    }

    render() {
        const emptyMessage = (
            <p>There are no users yet.</p>
        )
        const userList = (
            <div>
                
                <HashLoader color={"#123abc"} loading={this.props.users.fetching}></HashLoader>
                <Grid stackable columns={2}>
                    {
                        this.props.users.error.request ? <h3>Hata Var</h3> : this.props.users.users.map(user => <UserCard key={user.id} user={user}></UserCard>)
                    }
                </Grid>
            </div>
        )
        return (
            <div>
                {this.props.users.length === 0 ? emptyMessage : userList}
            </div>
        );
    }
}



export default UserList;