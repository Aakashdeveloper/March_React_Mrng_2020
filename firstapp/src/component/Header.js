import React,{Component} from 'react'
import './Header.css'

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:'My React App',
        }
    }
    

    render(){
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input/>
                </center>
                <hr/>
            </header>
        )
    }
}

export default Header;

/*
const Header = () => {
    return(
        <div>
            <center>
                <h1>React APP</h1>
            </center>
            <hr/>
        </div>
    )
}
*/
