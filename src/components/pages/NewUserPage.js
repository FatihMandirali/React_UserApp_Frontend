import React,{Component} from 'react'
import {connect} from 'react-redux'
import NewUserFrom from '../NewUserFrom'
import {newUserSubmit,fetchUser,onUpdateMovieSubmit} from '../../actions/newUser'

class NewUserPage extends Component{

    componentDidMount(){
        const {match} =this.props;
        if(!this.props.user && match.params.id){
            console.log(match.params.id)
            this.props.fetchUser(match.params.id)
        }
    }
    
    render(){
        return(
            <div>
                <NewUserFrom 
                user={this.props.user}
                newUser={this.props.newUser}
                newUserSubmit={this.props.newUserSubmit}
                onUpdateMovieSubmit={this.props.onUpdateMovieSubmit}
                ></NewUserFrom>
            </div>
        );
    }


}
const mapStateToProps=({newUser,users},props)=>{
    return {
        newUser,
        user:users.users.find(item=>item.id==props.match.params.id)
    }
}

const mapDispatchToProps={
    newUserSubmit,
    fetchUser,
    onUpdateMovieSubmit
}

export default connect(mapStateToProps,mapDispatchToProps) (NewUserPage);