import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import { history } from '../../history';
import { addtoCart } from '../../redux/Action/Cart.action';
import { GetProduct } from '../../redux/Action/Product.getaction';

function SeasonWise(props) {
    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    const product = useSelector(state => state.product)
    const category = useSelector(state => state.category)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProduct())
    }, [])

    const handlePush = (name) => {
        history.push('/single-product', { name: name })
        handleClick()
    }

    const handleCart = (id) => {
        dispatch(addtoCart(id))
    }

    let fData = product.product.filter((s) => s.category === props.location.state.name)
    // console.log(fData);
    let cData = category.category.filter((c)=> c.name === props.location.state.name)
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
                                    <p>See more</p>
                                    <h1>Season Products</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                <div className={`product-section mt-100 ${value.theme}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">{
                                cData.map((p) => {
                                        return (
                                            <div className="section-title">
                                                <h3><span className="orange-text"></span>{p.name}</h3>
                                            </div>
                                        )
                                })
                            }
                            </div>
                        </div>
                        <div className="row ">{
                            fData.map((p) => (
                                <div className="col-lg-4 col-md-6 text-center">
                                    <div className={`single-product-item ${value.theme}`}>
                                        <div className="product-image">
                                            <div onClick={() => handlePush(p.name)}><img src={p.profile_img} alt /></div>
                                        </div>
                                        <h3>{p.name}</h3>
                                        <p className="product-price"><span>Per {p.quantity}</span> {p.price}$ </p>
                                        <a className="cart-btn" onClick={() => handleCart(p.id)}><i className="fas fa-shopping-cart" /> Add to Cart</a>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeasonWise;