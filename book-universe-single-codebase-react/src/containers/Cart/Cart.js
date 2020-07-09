import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectList, selectTotal, removeBook } from 'bookReducer';
import { Link } from 'react-router-dom';
import '../../index.css';

export default function Cart() {
  const dispatch = useDispatch();
  const books = useSelector(selectList);
  const total = useSelector(selectTotal);
  
  const bookList = books ? books.map((item, index) =>
    <tr key={index}>
      <td><img src={item.img} height={75} width={75} alt="İmg" /></td>
      <td>{item.name}</td>
      <td>{item.author}</td>
      <td className="text-left">{item.publisher}</td>
      <td className="text-left">{item.price} TL </td>
      <td className="text-left"><button className="btn btn-sm btn-danger" onClick={() => dispatch(removeBook(item))}><i className="fa fa-trash"></i> </button> </td>
    </tr>
  ) : null;

  return (
    <div className="container">
      {books.length > 0 ? <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"> </th>
              <th scope="col" className="text-left">Book Name</th>
              <th scope="col" className="text-left">Author</th>
              <th scope="col" className="text-left">Publisher</th>
              <th scope="col" className="text-left">Price</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {bookList}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td> Intermediate Amount  </td>
              <td className="text-left">{total} TL</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Shipping Amount </td>
              <td className="text-left">6,90 TL</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><strong>Total Amount</strong></td>
              <td className="text-left"><strong>{total + 6.90} TL</strong></td>
            </tr>
          </tbody>
        </table>
      </div> :
        <div className="cart-warning-text">
          <h2> No products in the Cart</h2>
        </div>
      }
      {books.length > 0 ? (
        <div className="row" style={{ marginBottom: 50 }}>
          <div className="col-sm-12 col-md-6">
            <Link to="/"><button className="btn btn-primary btn-block">CONTINUE SHOPPING</button></Link>
          </div>
          <div className="col-sm-12 col-md-6">
            <Link to="/payment"><button className="btn btn-primary btn-block">PAY</button></Link>
          </div>
        </div>
      ) : (
        <div className="col-sm-12 col-md-6 offset-md-3" style={{ marginBottom: 50 }}>
          <Link to="/"><button className="btn btn-primary btn-block">CONTINUE SHOPPING</button></Link>
        </div>
      )}
    </div>
  )
}