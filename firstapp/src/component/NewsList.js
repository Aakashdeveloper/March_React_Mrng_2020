import React from 'react';

const NewsList = (props) => {
    console.log("NewsList>>>",props)

    const renderlist = props.datalist.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <React.Fragment>
            {renderlist}
        </React.Fragment>
    )
}

export default NewsList;


/*
var a = ['a','b','c','d']
a.map((data) => {console.log(data)})
*/