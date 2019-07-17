import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import Product from "./Product";


export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>Our Products</h1>
                <div className="container">
                    <div className='row'>
                        <ProductConsumer>
                            {
                                value => value.products.map(product => console.log(product))
                            }                        
                        </ProductConsumer>
                    </div>
                </div>

            </div>
              )
    }
}
