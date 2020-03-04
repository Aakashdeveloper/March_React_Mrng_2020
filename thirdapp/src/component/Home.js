import React,{Component, Fragment} from 'react';
import Banner from './Banner';
import Artist from './Artists';

const url = "http://localhost:8900/artists"

class Home extends Component{
    constructor(){
        super()

        this.state={
            artists:''
        }
    }
    render(){
        console.log("state",this.state.artists)
        return(
            <Fragment>
                <Banner/>
                <Artist artistsData={this.state.artists}></Artist>
            </Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({artists:data})
        })
    }
}


export default Home;