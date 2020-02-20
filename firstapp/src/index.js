import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

//Functional
const Home = () => {
    return(
        <div>
            <Header/>
            <h1>This is React App with Nareshit</h1>
            <h2>This is about our class</h2>
            <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum</p>
        </div>
    )
}

ReactDOM.render(<Home/>,document.getElementById('root'));