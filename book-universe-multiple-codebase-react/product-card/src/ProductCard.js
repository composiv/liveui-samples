import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addBook } from 'bookReducer';
import styles from './index.css';
import { PrimaryButton } from '@fluentui/react/lib/Button';

function ProductCard({index, data}) {
  const dispatch = useDispatch();

  return (
    <div className="ms-Grid-col ms-sm12 ms-md6 ms-xl3 mb-5" key={index}>
      <div className="card h-100">
        <img className="card-img-top" src={data.img} alt="image" height='310' />
        <div className="card-body" style={{ minHeight: 220 }}>
          <h5 className="card-title">
            <Link to="#"><h5> {data.name}</h5></Link>
          </h5>
          <br />
          <h6>Author : {data.author}</h6>

          <h6>Publisher : {data.publisher}</h6>

          <h6>Price : {data.price} TL</h6>
        </div>

        <div className="card-footer">
          <div className="ms-Grid-row">
            <h5 className="ms-Grid-col ms-sm12 ms-md12 ms-xl12 text-center">
              <PrimaryButton
                aria-label="Remove"
                text="Add to Cart" className="button" allowDisabledFocus
                onClick={() => { dispatch(addBook(data)) }}> </PrimaryButton>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
