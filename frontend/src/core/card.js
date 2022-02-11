import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';

const Card = ({
  product,
  // changeCartSize
}) => {
 
  return (
    
    <div className="card ">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">Category: {product.category && product.category.name}</p>
        <p className="black-8">Added on </p>
        <br />
        <Link to={`/product/${product._id}`}>
          <button className='btn btn-outline-primary mt-2 mb-2'>View product</button>
        </Link>
          <button className='btn btn-outline-warning mt-2 mb-2 mx-4'>Add to Cart</button>

      </div>
    </div>
  );
};

export default Card;