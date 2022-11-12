import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import { addtoCart } from '../../redux/Action/Cart.action';
import { GetProduct } from '../../redux/Action/Product.getaction';

function Single_product(props) {
    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 250, left: 0, behavior: 'smooth' })
    }
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProduct())
    }, [])

    const handleCart = (id) => {
        dispatch(addtoCart(id))
    }

    let fData = product.product.filter((l) => l.name === props.location.state.name)
    console.log(fData);

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
                                    <p>See more </p>
                                    <h1>Product Details</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* single product */}
                <div className="single-product  mt-150 ">
                    <div className="container ">
                        <div className="row ">
                            {
                                fData.map((p) => (
                                    <>
                                        <div className="col-md-5">
                                            <div className="single-product-img" >
                                                <img src={p.profile_img} alt />
                                            </div>
                                        </div>
                                        <div className="col-md-7 ">
                                            <div className="single-product-content">
                                                <h3> {p.name}</h3>
                                                <p className="single-product-pricing"><span>Per {p.quantity}</span> ${p.price}</p>
                                                <p>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. </p>
                                                <p>Eating a diet high in fruits can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.</p>
                                                <div className="single-product-form">
                                                    <p><strong>Categories: </strong>{p.category}</p>
                                                    {/* <div>
                                                        <button className='counter-btn'><i class="fas fa-plus"></i></button>
                                                        <strong>{p.quantity}</strong>
                                                        <button className='counter-btn'><i class="fas fa-minus"></i></button>                                                    </div> */}
                                                    <NavLink to={'/cart'} className="cart-btn mt-3" onClick={() => handleCart(p.id)}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                                                </div>
                                                {/* <h4>Share:</h4>
                                                <ul className="product-share ">
                                                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                                                    <li><a href><i className="fab fa-twitter" /></a></li>
                                                    <li><a href><i className="fab fa-google-plus-g" /></a></li>
                                                    <li><a href><i className="fab fa-linkedin" /></a></li>
                                                </ul> */}
                                            </div>
                                        </div>
                                    </>
                                ))

                            }

                        </div>
                        {/*<div className="col-md-5">
                                             <div className="single-product-img">
                                                <img src="assets/img/products/product-img-1.jpg" alt />
                                            </div>
                                        </div>
                                        <div className="col-md-7 ">
                                            <div className="single-product-content">
                                                <h3>Green apples have polyphenols</h3>
                                                <p className="single-product-pricing"><span>Per Kg</span> $85</p>
                                                <p>strawberries are a sodium-free, fat-free, cholesterol-free, low-calorie food. They are among the top 20 fruits in antioxidant capacity and are a good source of manganese and potassium.</p>
                                                <div className="single-product-form">
                                                    <form action="index.html">
                                                        <input type="number" placeholder={1} />
                                                    </form>
                                                    <NavLink to={'/cart'} className="cart-btn mt-3"><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                                                    <p><strong>Categories: </strong>Fruits, Organic , spring season fruits</p>
                                                </div>
                                                <h4>Share:</h4>
                                                <ul className="product-share ">
                                                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                                                    <li><a href><i className="fab fa-twitter" /></a></li>
                                                    <li><a href><i className="fab fa-google-plus-g" /></a></li>
                                                    <li><a href><i className="fab fa-linkedin" /></a></li>
                                                </ul>
                                            </div>
                                        </div> */}
                        <div className='row  mt-100'>
                            <div className='text-center mx-auto mb-100'>
                                <NavLink to={'/shop'} className="cart-btn" onClick={() => handleClick()}>All Products</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Single_product;