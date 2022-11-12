import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import { history } from '../../history';
import Category from '../Categories/Category/Category';
import ProductsView from '../ProductsView/ProductsView';

function Index(props) {
    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 250, left: 0, behavior: 'smooth' })
    }
    const handlePush = () => {
        history.push('/shop')
        handleClick()
    }
    return (
        <div>
            <div className={` ${value.theme}`}>
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
                {/* end search area */}
                {/* hero area */}
                <div className="hero-area hero-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 offset-lg-2 text-center">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Fresh &amp; Organic</p>
                                        <h1>Delicious Seasonal Fruits</h1>
                                        <div className="hero-btns">
                                            <NavLink to={'/shop'} className="boxed-btn"> Fruit Collection</NavLink>
                                            <NavLink to={'/contact'} className="bordered-btn">Contact Us</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end hero area */}

                <Category />

                {/* <ProductsView /> */}

                {/* features list section */}
                <div className={`list-section pt-100 pb-100 my-5 ${value.theme}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 ">
                                <div className="list-box d-flex align-items-center">
                                    <div className="list-icon">
                                        <i className="fas fa-shipping-fast" />
                                    </div>
                                    <div className="content">
                                        <h3>Free Shipping</h3>
                                        <p>When order over $75</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="list-box d-flex align-items-center">
                                    <div className="list-icon">
                                        <i className="fas fa-phone-volume" />
                                    </div>
                                    <div className="content">
                                        <h3>24/7 Support</h3>
                                        <p>Get support all day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="list-box d-flex justify-content-start align-items-center">
                                    <div className="list-icon">
                                        <i className="fas fa-sync" />
                                    </div>
                                    <div className="content">
                                        <h3>Refund</h3>
                                        <p>Get refund within 3 days!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end features list section */}

                {/* product section */}
                <div className={`product-section mb-150 ${value.theme}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="section-title">
                                    <h3><span className="orange-text">Our</span> Products</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 text-center">
                                <div className={`single-product-item ${value.theme}`} onClick={() => handlePush()}>
                                    <div className="product-image" >
                                        <div ><img src="assets/img/products/product-img-1.jpg" alt /></div>
                                    </div>
                                    <h3>Strawberry</h3>
                                    <p className="product-price"><span>Per Kg</span> 85$ </p>
                                    {/* <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink> */}
                                </div>
                            </div>

                            <div className={`col-lg-4 col-md-6 text-center ${value.theme}`}> 
                                <div className={`single-product-item ${value.theme}`} onClick={() => handlePush()}>
                                    <div className="product-image">
                                        <div ><img src="assets/img/products/product-img-2.jpg" alt /></div>
                                    </div>
                                    <h3>Grapes</h3>
                                    <p className="product-price"><span>Per Kg</span> 70$ </p>
                                    {/* <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                                <div className={`single-product-item ${value.theme}`} onClick={() => handlePush()}>
                                    <div className="product-image">
                                        <div ><img src="assets/img/products/product-img-3.jpg" alt /></div>
                                    </div>
                                    <h3>Lemon</h3>
                                    <p className="product-price"><span>Per Kg</span> 35$ </p>
                                    {/* <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className={`single-product-item ${value.theme}`} onClick={() => handlePush()}>
                                    <div className="product-image">
                                        <div ><img src="assets/img/products/product-img-9.jpg" alt /></div>
                                    </div>
                                    <h3>Mango</h3>
                                    <p className="product-price"><span>Per Kg</span> 90$ </p>
                                    {/* <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink> */}                           </div> 
                            </div>

                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className={`single-product-item ${value.theme}`} onClick={() => handlePush()} >
                                    <div className="product-image">
                                        <div ><img src="assets/img/products/product-img-10.jpg" alt /></div>
                                    </div>
                                    <h3>Orange</h3>
                                    <p className="product-price"><span>Per Kg</span> 55$ </p>
                                    {/* <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink> */}                           
                                    </div> 
                            </div>

                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className={`single-product-item ${value.theme}`} onClick={() => handlePush()} >
                                    <div className="product-image">
                                        <div><img src="assets/img/products/product-img-11.jpg" alt /></div>
                                    </div>
                                    <h3>Watermelon</h3>
                                    <p className="product-price"><span>Per Kg</span> 60$ </p>
                                    {/* <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>                             */}
                                    </div>
                            </div>
                            <div className='text-center mx-auto'>
                                <NavLink to={'/shop'} className="cart-btn" onClick={() => handleClick()}> All Products</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
                {/* end product section */}
                {/* cart banner section */}
                <section className="cart-banner pt-100 pb-100  mb-150">
                    <div className="container">
                        <div className="row clearfix">
                            {/*Image Column*/}
                            <div className="image-column col-lg-6">
                                <div className="image">
                                    <div className="price-box">
                                        <div className="inner-price">
                                            <span className="price">
                                                <strong>30%</strong> <br /> off per kg
                                            </span>
                                        </div>
                                    </div>
                                    <img src="assets/img/a.jpg" alt />
                                </div>
                            </div>
                            {/*Content Column*/}
                            <div className="content-column col-lg-6">
                                <h3><span className="orange-text">Deal</span> of the month</h3>
                                <h4>Hikan Strwaberry</h4>
                                <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>
                                {/*Countdown Timer*/}
                                <div className="time-counter"><div className="time-countdown clearfix" data-countdown="2020/2/01"><div className="counter-column"><div className="inner"><span className="count">00</span>Days</div></div> <div className="counter-column"><div className="inner"><span className="count">00</span>Hours</div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span>Mins</div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span>Secs</div></div></div></div>
                                <NavLink to={'/shop'} className="cart-btn mt-3" onClick={() => handleClick()}> Shop Now</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end cart banner section */}

                {/* advertisement section */}
                <div className="abt-section mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="abt-bg">
                                    <a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube"><i className="fas fa-play" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="abt-text">
                                    <p className="top-sub">Since Year 1999</p>
                                    <h2>We are <span className="orange-text">Fruitkha</span></h2>
                                    <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
                                    <NavLink to={'/about'} className="boxed-btn mt-4" onClick={() => handleClick()}>know more</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end advertisement section */}
                {/* shop banner */}
                <section className={`shop-banner mb-150 ${value.theme}`}>
                    <div className="container ">
                        <h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
                        <div className="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
                        <NavLink to={'/shop'} className="boxed-btn"> Shop Now</NavLink>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Index;