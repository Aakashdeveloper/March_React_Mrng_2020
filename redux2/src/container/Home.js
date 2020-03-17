import React, {Component, Fragment} from 'react';
import { connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {latestNews,articleNews,galleryNews} from '../actions';

import LatestNews from '../component/Home/latestDisplay';
import ArticleDiplay from '../component/Home/articleNews';
import GalleryDisplay from '../component/Home/galleryDisplay';


class Home extends Component {
    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
        this.props.galleryNews()
    }
    render(){
        return(
            <Fragment>
               <LatestNews ldata={this.props.datalist.latestdata}/>
               <ArticleDiplay adata={this.props.datalist.articledata}/>
               <GalleryDisplay galdata={this.props.gallist.gallerydata}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles,
        gallist:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,galleryNews},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);


