import React from 'react'

export default function Child({product, onDelete, onIncrement}) {
  return (
    <div className='col'>
        <div className='card text-center text-white bg-dark'>
            <div className='card-body'>
                <h5 className='card-title'>Name: {product.name}</h5>
                <p className='card-text'>Price: {product.price}</p>
                <p className='card-text'>Count: {product.count}</p>
                <p className='card-text'>Category: {product.category}</p>
                <button className='btn btn-danger' onClick={() => onDelete(product.id)}>Delete</button>
                <button className='btn btn-info' onClick={() => onIncrement(product.id)}>Increment</button>
            </div>
        </div>
    </div>
  )
}
