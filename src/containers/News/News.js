import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';

function News(props) {
    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
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
                                    <p>Organic Information</p>
                                    <h1>News Article</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* latest news */}
                <div className="latest-news mt-150 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <a><div className="latest-news-bg news-bg-1" /></a>
                                    <div className="news-text-box">
                                        <h3><a>You will vainly look for fruit on it in autumn.</a></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                        {/* <NavLink to={'/single-new'} className="read-more-btn">read more <i className="fas fa-angle-right" /></NavLink> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <a ><div className="latest-news-bg news-bg-2" /></a>
                                    <div className="news-text-box">
                                        <h3><a >A man's worth has its season, like tomato.</a></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                        {/* <NavLink to={'/single-new'} className="read-more-btn">read more <i className="fas fa-angle-right" /></NavLink> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <a ><div className="latest-news-bg news-bg-3" /></a>
                                    <div className="news-text-box">
                                        <h3><a >Good thoughts bear good fresh juicy fruit.</a></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                        {/* <NavLink to={'/single-new'} className="read-more-btn">read more <i className="fas fa-angle-right" /></NavLink> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <a ><div className="latest-news-bg news-bg-4" /></a>
                                    <div className="news-text-box">
                                        <h3><a >Fall in love with the fresh orange</a></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                        {/* <NavLink to={'/single-new'} className="read-more-btn">read more <i className="fas fa-angle-right" /></NavLink> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <a ><div className="latest-news-bg news-bg-5" /></a>
                                    <div className="news-text-box">
                                        <h3><a >Why the berries always look delecious</a></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2019</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                        {/* <NavLink to={'/single-new'} className="read-more-btn">read more <i className="fas fa-angle-right" /></NavLink> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-latest-news">
                                    <a ><div className="latest-news-bg news-bg-6" /></a>
                                    <div className="news-text-box">
                                        <h3><a >Love for fruits are genuine of John Doe</a></h3>
                                        <p className="blog-meta">
                                            <span className="author"><i className="fas fa-user" /> Admin</span>
                                            <span className="date"><i className="fas fa-calendar" /> 27 December, 2018</span>
                                        </p>
                                        <p className="excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam.</p>
                                        {/* <NavLink to={'/single-new'} className="read-more-btn">read more <i className="fas fa-angle-right" /></NavLink> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row  '>
                            <div className='text-center mx-auto mb-150'>
                                <NavLink to={'/shop'} className="cart-btn" onClick={() => handleClick()}>All Products</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default News;