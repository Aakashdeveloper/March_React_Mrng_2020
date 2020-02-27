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
        this.props.userText(event.target.value)
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
