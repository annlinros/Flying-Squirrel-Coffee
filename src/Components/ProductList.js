import React, { useContext } from 'react';
import { ProductContext } from "../context";
import Product from "./Product";


 const ProductList = () =>  {

  const {products} = useContext(ProductContext);

        return (
            <div>
                <div className="products">
                    <div className='row'>
                            {
                                 products.map(product => <Product key={product.id} product={product}/>)
                            }                        
                    </div>
                </div>
            </div>
              )
    }

export default ProductList;