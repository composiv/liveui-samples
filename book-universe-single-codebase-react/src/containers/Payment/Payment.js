import React, { useState } from 'react';
import successful from '../../images/successful.jpg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotal, clear } from 'bookReducer';
import '../../index.css';

export default function Payment() {
  const [payment, setPayment] = useState(false);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  return(payment ? (
    <div className="container text-center">
      <img src={successful} alt="image" width="250px" height="250px"/>
      <h4 className="congratulations text">  Payment successful </h4>
      <p>
        You can now continue shopping with Book Universe.
      </p>
      <p className="text-center">
        <Link to="/">
          <button className="btn btn-primary col-md-6 success-button" aria-label="Cancel" >
            GO TO HOME
          </button>
        </Link>
      </p>
    </div>
  ) : (
    <div className="container">
      <h4> Payment</h4>
      <hr />
      <p className="text">We are very happy that you have chosen us.</p>
      <p className="text"> Amount to be paid: {total + 6.90}  TL</p>

      <div className="row" style={{ marginBottom: 30 }}>
        <div className="col-md-4 text">
          Card Holder's Name :
        </div>
        <div className="col-md-8">
          <input className="textbox" type='text' />
        </div>
        <div className="col-md-4 text">
          Card Number :
        </div>
        <div className="col-md-8">
          <input className="textbox" type='number' />
        </div>
        <div className="col-md-4 text">
          Card Expiry Data :
        </div>
        <div className="col-md-1">
          <select id="month" name="month">
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="col-md-1 text-center">
          /
        </div>
        <div className="col-md-6">
          <select id="year" name="year">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>
        </div>
        <div className="col-md-4 text">Card CVV : </div>
        <div className="col-md-8"><input className="textbox" type='number' /></div>
      </div>

      <div className="row" style={{ marginBottom: 50 }}>
        <div className="col-sm-12 col-md-6">
          <Link to="/"><button className="btn btn-primary btn-block">CANCEL</button></Link>
        </div>

        <div className="col-sm-12 col-md-6">
          <button className="btn btn-primary btn-block" onClick={() => { setPayment(true); dispatch(clear()) }}>PAY</button>
        </div>
      </div>
    </div>
  ));
}
