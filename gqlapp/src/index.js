import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { Query} from 'react-apollo';


const client = new ApolloClient({
    uri:`http://localhost:8600/graphql`
})

const GET_PRODUCTS = gql`
query product($id: Int)
{
    product(id:$id){
        name
        category
        rating
    }
}
`

class ProductList extends Component{
    constructor(){
        super()

        this.state={
            id:3
        }
    }
    render(){
        return(
            <div>
                <center>
                    <h1>React With GQL</h1>
                    <Query query={GET_PRODUCTS} client={client} variables={{id:this.state.id}}>
                        {({loading,error,data}) => {
                            if(loading) return <p>Loading.....</p>
                            if(error) return <p>Error.....</p>
                            return(
                                <div>
                                    <h3>{data.product.name}</h3>
                                    <h3>{data.product.category}</h3>
                                    <h3>{data.product.price}</h3>
                                    <h3>{data.product.rating}</h3>
                                </div>
                            )
                        }}


                    </Query>
                </center>
            </div>
        )
    }
}

ReactDOM.render(<ProductList/>,document.getElementById('root'));