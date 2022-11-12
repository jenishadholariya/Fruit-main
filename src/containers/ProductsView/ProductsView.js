import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import { history } from '../../history';
import { addtoCart } from '../../redux/Action/Cart.action';
import { GetProduct } from '../../redux/Action/Product.getaction';

function ProductsView(props) {

    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 250, left: 0, behavior: 'smooth' })
    }

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const category = useSelector(state => state.category)

    // console.log(product.product);

    useEffect(() => {
        dispatch(GetProduct())
    }, [])

    const handleCart = (id)=>{
        console.log("handleCart");
        dispatch(addtoCart(id))
    }

    const handlePush = (name) => {
        history.push('/single-product', { name: name })
        handleClick()
    }
    return (
        <div>
            <div className={`product-section mt-100 ${value.theme}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Our</span> Products</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row ">{
                        product.product.map((p) => (
                            <div className="col-lg-4 col-md-6 text-center">
                                <div className={`single-product-item ${value.theme}`}>
                                    <div className="product-image">
                                        <div onClick={() => handlePush(p.name)}><img src={p.profile_img} alt /></div>
                                    </div>
                                    <h3>{p.name}</h3>
                                    <p className="product-price"><span>Per {p.quantity}</span> {p.price}$ </p>
                                    <NavLink to={'/shop'} className="cart-btn" onClick={()=>handleCart(p.id)}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsView;