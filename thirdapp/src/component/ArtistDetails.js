import React,{Component} from 'react';
import Header from './Header';
import axios from 'axios';
import Albums from './Albums';

const url = "http://localhost:8900/artists";

class ArtistDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    render(){
        const mydetails = this.state.details;
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${mydetails.cover}.jpg')`}}></span>
                        <h3>{mydetails.name}</h3>
                        <div className="bio_text">
                            {mydetails.bio}
                        </div>
                    </div>
                </div>
                <Albums albumsdata={mydetails.albums}/>
            </div>
        )
    }

    /*componentDidMount(){
        axios.get(`${url}/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({details:response.data})
        });
    }*/

    async componentDidMount(){
        const response = await axios.get(`${url}/${this.props.match.params.id}`)
        const mydata = response.data
        this.setState({details:mydata})
    }

}


export default ArtistDetails