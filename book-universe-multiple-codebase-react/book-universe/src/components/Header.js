import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectListValue
} from '../redux/bookReducer';

export function Header() {
    const count = useSelector(selectListValue);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Book Universe</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
              <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-success btn-sm ml-3" to="/cart">
                                <i className="fa fa-shopping-cart"></i>'   {count}   Cart<span className="badge badge-light"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}