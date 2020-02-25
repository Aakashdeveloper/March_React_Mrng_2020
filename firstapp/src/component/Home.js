import React,{Component} from 'react'
import Header from './Header';
import NewsList from './NewsList';
import JSON from '../db.json';

class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            news:JSON,
            filtered:JSON
        }
    }
    /*var b = [0,1,2,3,4]

        b.filter((data) => { return data>2})
        [1,2,3,4]
    */

    filterNews(keywords){
       const output = this.state.news.filter((data) => {
           return data.title.indexOf(keywords)>-1
       })
       this.setState({filtered:output})
    }
    
    render(){
        return(
            <React.Fragment>
                <Header/>
                <NewsList datalist={this.state.filtered}/>
            </React.Fragment>
            
        )
    }
}

export default Home;