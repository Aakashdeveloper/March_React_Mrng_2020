import React from 'react';

const Albums = (props) => {
    const showAlbums = ({albumsdata}) => {
        if(albumsdata){
            return albumsdata.map((item) => {
                return(
                    <img src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }
    return(
        <div className="album_list">
            {showAlbums(props)}
        </div>
    )
}

export default Albums;