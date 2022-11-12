import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import { cartEmpty } from '../../redux/Action/Cart.action';
import { getOrderAction } from '../../redux/Action/Order.action';

function Order(props) {
    const value = useContext(themeContext);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cartEmpty())
    }, [])

    return (
        <div>
            <div className={`${value.theme}`}>
                {/* search area */}
                <div className="search-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="close-btn"><i className="fas fa-window-close" /></span>
                                <div className="search-bar">
                                    <div className="search-bar-tablecell">
                                        <h3>Search For:</h3>
                                        <input type="text" placeholder="Keywords" />
                                        <button type="submit">Search <i className="fas fa-search" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end search arewa */}
                {/* breadcrumb-section */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Fresh and Organic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                <div className="checkout-section mt-100 mb-100">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12 text-center">
                                <h4 className='order'>Order Placed Successfully</h4>
                                <img src='assets/img/products/tick.gif' />
                            </div>
                            <div className="col-lg-12 text-center mt-100">
                                <NavLink to={'/'} className="boxed-btn"> Home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Order;