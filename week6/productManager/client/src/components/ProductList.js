import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
const ProductList = (props) => {

    const {product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	        console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, []);
    
    return (
        <div style={{textAlign:"center"}}>
            <h1 >All Products</h1>
            {
                product.map((product, index)=>{
                return (
                    <div key={index}> 
                        <Link to={`/product/${product._id}`}>{product.productName}</Link>
                    </div> 
                )})
            }
        </div>
    );
}
export default ProductList;


