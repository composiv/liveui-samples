import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectList, selectTotal, removeBook } from 'bookReducer';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import styles from './index.css';


function Cart() {
  const dispatch = useDispatch();
  const books = useSelector(selectList);
  const total = useSelector(selectTotal);

  const item = books ? books.map((item, index) =>
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
    <div dir="ltr" className="container">
      {books.length > 0 ? <div className="ms-Grid-col ms-xl12">
        <div className="table-responsive">
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
              {item}
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
        </div>
      </div> : <div className="margin">
          <h3> No products in the Basket</h3>
        </div>}
      <div className="ms-Grid-row">
        <div className="ms-Grid">
          {books.length > 0 ?
            <div className="ms-Grid-row cart">
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl6">
                <Link to="/">
                  <PrimaryButton text="Continue Shopping" className="button text-uppercase" allowDisabledFocus ></PrimaryButton>
                </Link>
              </div>
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl6 text-right">
                <Link to="/payment">
                  <PrimaryButton text="Pay" className="button text-uppercase" allowDisabledFocus ></PrimaryButton>
                </Link>
              </div>
            </div> :
            <div className="ms-Grid-row cart">
              <div className="ms-Grid-col ms-sm12 ms-md3 ms-xl3"></div>
              <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl6">
                <Link to="/">
                <PrimaryButton text="Continue Shopping" className="no-item-button text-uppercase" allowDisabledFocus ></PrimaryButton></Link>
              </div>
            </div>}

        </div>
      </div>
    </div>
  );
}

export default Cart;
