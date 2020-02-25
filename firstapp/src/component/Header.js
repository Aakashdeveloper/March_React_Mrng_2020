import React,{Component} from 'react'
import './Header.css'

class Header extends Component{

    constructor(){
        super()

        this.state={
            title:'My React App',
            keyword:'User Text here'
        }
    }
    
    inputChange(event){
        console.log(event.target.value)
        this.setState({"keyword":event.target.value?event.target.value:"User Text Here"})
    }

    render(){
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <p>{this.state.keyword}</p>
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
