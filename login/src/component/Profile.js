import React,{Component} from 'react';

const url = "http://localhost:5000/api/auth/userinfo";

class Profile extends Component {
    constructor(props){
        super(props)

        this.state={
            user:''
        }

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        localStorage.removeItem('Token')
        this.props.history.push('/login')
    }

    render(){
        return(
            <div>
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3> User Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h2>Your email is {this.state.user.email}</h2>
                    </div>
                    <button className="btn btn-danger"
                        onClick={this.handleLogout}>
                            Logout
                    </button>
                </div>
            </div>
        </div> 
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':localStorage.getItem('Token')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }

}


export default Profile;