import React,{useState,useEffect} from 'react';
import axios from 'axios';

const url=""
function Hooks(){
    const [title] = useState('Hooks React Component');
    const [counter,setcounter] = useState(0)
    const [product, setProduct] = useState()

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            const mydata = res.data
            setProduct(mydata)
        })
    },[product])
    

    return(
        <div>
            <h1>{title}</h1>
            <h2>Counter value is {counter}</h2>
            <button className="btn btn-info"
            onClick={() => {setcounter(counter+1)}}>
                Click
            </button>
        </div>
    )
}


export default Hooks;