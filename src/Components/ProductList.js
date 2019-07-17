import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import Product from "./Product";


export default class ProductList extends Component {
    render() {

        return (
            <div>
                <div className="products">
                    <div className='row'>
                        <ProductConsumer>
                            {
                                value => value.products.map(product => <Product key={product.id} product={product}/>)
                            }                        
                        </ProductConsumer>
                    </div>
                </div>
            </div>
              )
    }
}
