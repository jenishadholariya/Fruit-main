import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import Category from '../Categories/Category/Category';
import ProductsView from '../ProductsView/ProductsView';

function Shop(props) {
    const value = useContext(themeContext);
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
                                    <h1>Shop</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                <Category />
                {/* products */}
                <div className="product-section mt-100 mb-150">
                    <div className="container">
                        {/* <div className="row">
                            <div className="col-md-12">
                                <div className="product-filters">
                                    <ul>
                                        <li className="active" data-filter="*">All</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                       
                       <ProductsView />

                    
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Shop;