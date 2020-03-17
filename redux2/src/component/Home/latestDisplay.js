import React from 'react';
import { Link } from 'react-router-dom';

const LatestDiplay = (props) => {

    const NewsRender = ({ldata}) => {
        if(ldata){
            return ldata.map((data) => {
                return(
                <Link to="/" className="item">
                    <div className="image_cover"
                    style={{background:`url('/images/articles/${data.img}')`}}>
                        <div className="description">
                            <span>{data.category}</span>
                            <div>{data.title}</div>
                        </div>

                    </div>
                </Link>
                )
            })
        }
    }

    return(
        <div className="home-latest">
            {NewsRender(props)}
        </div>
    )


}

export default LatestDiplay;