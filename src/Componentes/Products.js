import React, { Component } from 'react';
import axios from "axios"
import Card from "./Card"
import style from "./products.module.css"
class Products extends Component {
    constructor(){
        super()
        this.state= {
            products:[]
        }
    }
    componentDidMount(){
        axios.get ("https://fakestoreapi.com/products")
        .then((response) =>{
            this.setState({
                products: response.data
            })
        } )


    }
    render() {
        let {products}=this.state
        return (
            <div className={style.container}>
              {(products.length) ? products.map(product=><Card key={product.id} imag={product.image} cost={`${product.price} $`} model={product.title} id={product.id}/>) : <h1> Loading ....</h1>
            }    
            
                
            </div>
        );
    }
}

export default Products;