import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'reactstrap';
import { themeContext } from '../../context/ThemeContext';


function Search(props) {
    const [search, setSearch] = useState([])
    const frutika = [
        {
            id: 401,
            name: "Strawberry",
            quantity: "1Kg",
            price: "50"
        },
        {
            id: 402,
            name: "Grapes",
            quantity: "1Kg",
            price: "70"
        },
        {
            id: 403,
            name: "raspberry",
            quantity: "1Kg",
            price: "50"
        },
        {
            id: 404,
            name: "Lemon",
            quantity: "1Kg",
            price: "35"
        },
        {
            id: 405,
            name: "Green Apple",
            quantity: "1Kg",
            price: "45"
        },
        {
            id: 406,
            name: "kiwi",
            quantity: "1Kg",
            price: "50"
        },
    ]

    const handleSearch = (val) => {
        let fData = frutika.filter((f) => (
            f.name.toLowerCase().includes(val.toLowerCase()) ||
            f.quantity.toString().includes(val) ||
            f.price.toString().includes(val)
        ))
        console.log(val)
        setSearch(fData)
    }

    const finalData = search.length > 0 ? search : frutika
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
                                    <p>We sale fresh fruits</p>
                                    <h1>Search Products</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12" >
            </div>
            <div className={`${value.theme}`}>
                <div className= {`cart-section mt-100 mb-100 ${value.theme}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12">
                                <div className='search col-lg-8 mx-auto mb-3 ' >
                                    <Input
                                        margin="dense"
                                        name="search"
                                        label="Search Medicine "
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        placeholder='Search Here'
                                        onChange={(e) => handleSearch(e.target.value)}
                                    />
                                </div>
                                <div className="cart-table-wrap">
                                    <table className="cart-table">
                                        <thead className="cart-table-head">
                                            <tr className="table-head-row">
                                                <th className="product-select" />
                                                <th className="product-id">id</th>
                                                <th className="product-name">Name</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-price">Price</th>
                                            </tr>
                                        </thead>
                                        {
                                            finalData.map((f, i) => {
                                                return (
                                                    <tbody key={i}>
                                                        <tr className="table-body-row">
                                                            <td className="product-remove"><input id="checkbox2" type="checkbox" />
                                                            </td>
                                                            <td className="product-id">{f.id}</td>
                                                            <td className="product-name">{f.name}</td>
                                                            <td className="product-price">{f.quantity}</td>
                                                            <td className="product-price">{f.price}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </table>
                                </div>

                                <div className="col-2 mx-auto my-3">
                                <NavLink to={'/shop'} className="boxed-btn">Shop Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;