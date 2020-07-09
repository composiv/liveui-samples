import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addBook } from 'bookReducer';
import db from '../../db.json';

export default function Home() {
  const dispatch = useDispatch();
  
  const productList =
  db.productList ?
    db.productList.map((item, index) =>
      <div className="col-lg-3 col-md-3 mb-5" key={index}>
        <div className="card h-100">
          <img className="card-img-top" src={item.img} alt="image" height='310' />
          
          <div className="card-body">
            <h5 className="card-title">
              <Link to="#"><h5> {item.name}</h5></Link>
            </h5>
            <br />
            <h6>Author : {item.author}</h6>
            <h6>Publisher : {item.publisher}</h6>
            <h6>Price : {item.price} TL</h6>
            <p className="card-text"></p>
          </div>

          <div className="card-footer">
            <div className="row">
              <h5 className="col-md-12 col-sm-12 text-center ">
                <button type="button" className="btn btn-primary" onClick={() => dispatch(addBook(item))}>Add to Cart</button>
              </h5>
            </div>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div className="container">
      <div className="row">
        {productList}
      </div>
    </div>
  );
}
