import React,{Component, Fragment} from 'react';
import UserDisplay from './UserDisplay';

const url="http://localhost:5000/api/auth/users";

class UserList extends Component {
    constructor(){
        super()

        this.state={
            users:''
        }
    }

    render(){
        return(
            <Fragment>
                <UserDisplay userData={this.state.users}/>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                users:data
            })
        })
    }

}


export default UserList;