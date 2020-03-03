//Get Initial State
//Set Initial Set
//Before getting created
//Render
//After getting Created

import React,{Component, Fragment} from 'react';

class Lifecycle extends Component {
    //1 Get Initial State
    constructor(props){
        super(props)
        console.log("<<<<<constructor>>>>>>")
        //2 Set Initial Set
        this.state={
            title:'React APP'
        }
    }

    //3 Before getting created
    componentWillMount(){
        console.log("<<<<<componentWillMount>>>>>>")
    }

    componentWillUpdate(){
        console.log("<<<<<componentWillUpdate>>>>>>")
    }

    componentDidUpdate(){
        console.log("<<<<<componentDidUpdate>>>>>>")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("<<<<<shouldComponentUpdate>>>>>>")
        if(nextState.title===this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 Render
    render(){
        console.log("<<<<<render>>>>>>")
        return(
            <Fragment>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={()=>{this.setState({title:'Something Else'})}}>
                    Click me
                </div>
            </Fragment>
        )
    }

    //5 After getting Created
    componentDidMount(){
        console.log("<<<<<componentDidMount>>>>>>")
    }

    componentWillUnmount(){
        alert('You are leaving the page')
        console.log("<<<<<componentWillUnmount>>>>>>")
    }
}

export default Lifecycle