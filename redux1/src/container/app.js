import React,{Component} from 'react';
import {movieslist} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import DisplayList from '../component/displaylist';

class App extends Component {
    componentDidMount(){
        this.props.movieslist()
    }
    render(){
        return(
            <div>
                <h1>Redux APP</h1>
                <DisplayList datalist={this.props.mydata} ></DisplayList>
            </div>
        )
    }
}

//To Get State from store
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.movies
    }
}
//To Dispatch Action
function mapDispatchToProps(dispatch){
    return bindActionCreators({movieslist}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);