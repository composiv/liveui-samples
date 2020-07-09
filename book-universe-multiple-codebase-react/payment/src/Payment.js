import React, { useState } from 'react';
import styles from './index.css';
import successful from './successful.jpg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotal, clear } from 'bookReducer';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { ComboBox, IComboBoxProps, IComboBoxStyles } from 'office-ui-fabric-react/lib/ComboBox';

function Payment() {
  const [payment, setPayment] = useState(false);

  const total = useSelector(selectTotal);
  const dispatch = useDispatch();

  return (payment ?
    <div className="container congratulations">
      <img src={successful} alt="image" width="250" height="250" />
      <h4 className="congratulations text">  Payment successful </h4>
      <p>
        You can now continue shopping with Book Universe.
      </p>
      <p className="text-center">
        <Link to="/">
          <button className="btn btn-primary success-button" aria-label="Cancel" >
            GO TO HOME
          </button>
        </Link>
      </p>
    </div>
    :
    <div className="container">
      <h4> Payment</h4>
      <hr />
      <p className="text">We are very happy that you have chosen us.</p>
      <p className="text"> Amount to be paid: {total + 6.90}  TL</p>
      <br />
  
      <div  dir="ltr" className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl4 text">
          Card Holder's Name :
          </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl8">
          <input className="textbox" type='text' />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl4 text">
          Card Number :
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl8">
          <input className="textbox" type='number' />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl4 text">
          Card Expiry Data :
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl2 text">
          <ComboBox
            label="Month:"
            useComboBoxAsMenuWidth={false}
            options={
              [
                { key: '01', text: 'January' },
                { key: '02', text: 'February' },
                { key: '03', text: 'March' },
                { key: '04', text: 'April' },
                { key: '05', text: 'May' },
                { key: '06', text: 'June' },
                { key: '07', text: 'July' },
                { key: '08', text: 'August' },
                { key: '09', text: 'September' },
                { key: '10', text: 'October' },
                { key: '11', text: 'November' },
                { key: '12', text: 'December' }
              ]
            }
          />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl1 text-center reverse-slash">
          /
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl2 text">
          <ComboBox
            label="Year:"
            useComboBoxAsMenuWidth={false}
            options={
              [
                { key: '2020', text: '2020' },
                { key: '2021', text: '2021' },
                { key: '2022', text: '2022' },
                { key: '2023', text: '2023' },
                { key: '2024', text: '2024' }
              ]
            }
          />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl3"></div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl4 text">Card CVV :</div>
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-xl8"><input className="textbox" type='number' /></div>
      </div>

      <div className="ms-Grid-row" dir="ltr" style={{ marginTop: 20, marginBottom: 100 }}>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-xl6">
          <Link to="/">
            <PrimaryButton text="Cancel" className="button text-uppercase" allowDisabledFocus ></PrimaryButton>
          </Link>
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-xl6">
          <PrimaryButton text="Pay" className="button text-uppercase" allowDisabledFocus onClick={() => { setPayment(true); dispatch(clear()) }}></PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Payment;
