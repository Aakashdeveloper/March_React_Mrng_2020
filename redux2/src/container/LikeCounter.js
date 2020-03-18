import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import {handleLikes} from '../actions';

class Likecounter extends Component{

    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About Articles</h3>
                <div className="addlikes-container">
                    <div className="btn likes">
                        <div className="hits">

                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn dislikes">
                        <div className="hits">

                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


Likecounter.protoTypes ={
    dispatch:PropTypes.func
}


export default connect()(Likecounter)
