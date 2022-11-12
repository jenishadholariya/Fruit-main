
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../../context/ThemeContext';
import { history } from '../../../history';
import { GetCategory } from '../../../redux/Action/Category.action';

function Category(props) {
    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    const dispatch = useDispatch()
    const category = useSelector(state => state.category)
    // console.log(category.category);

    useEffect(() => {
        dispatch(GetCategory())
    }, [])

    // let season = [
    //     { to: '/winter-fruits' },
    //     { to: '/spring-fruits' },
    //     { to: '/summer-fruits' },
    //     { to: '/fall-fruits' },
    //     { to: '/allseason-fruits' }
    // ]

    const handleId = (name)=>{
        history.push('/season-fruits' , {name:name} )
        handleClick()
    }
    return (
        <div>
            <div className={`product-section mt-100 ${value.theme}`}>
                <div className="container">
                    <div className="row justify-content-between">
                        {
                            category.category.map((c) => (
                                <div className="col-lg-2 col-md-4 text-center">
                                    <div className={` category ${value.theme}`}>
                                        <div className="category">
                                            {
                                                <a onClick={()=> handleId(c.name)}><img src={c.profile_img} alt /></a>
                                            }

                                        </div>
                                    </div>
                                    <h5 className='mt-3'>{c.name}</h5>
                                </div>

                            ))

                        }
                    </div>
                    {/* <div className="col-lg-2 col-md-4 text-center">
                            <div className={` category ${value.theme}`}>
                                <div className=" category">
                                    <NavLink to={'/spring-fruits'} onClick={() => handleClick()}><img src="assets/img/products/product-img-1.jpg" alt /></NavLink>
                                </div>
                            </div>
                            <h5 className='mt-3'>Spring Season Fruits</h5>
                        </div>

                        <div className="col-lg-2 col-md-4 text-center">
                            <div className={` category ${value.theme}`}>
                                <div className=" category">
                                    <NavLink to={'/summer-fruits'} onClick={() => handleClick()}><img src="assets/img/products/product-img-9.jpg" alt /></NavLink>
                                </div>
                            </div>
                            <h5 className='mt-3'>Summer Season Fruits</h5>
                        </div>

                        <div className="col-lg-2 col-md-4 text-center">
                            <div className={` category ${value.theme}`}>
                                <div className=" category">
                                    <NavLink to={'/fall-fruits'} onClick={() => handleClick()}><img src="assets/img/products/product-img-2.jpg" alt /></NavLink>
                                </div>
                            </div>
                            <h5 className='mt-3'>Fall Season Fruits</h5>
                        </div>

                        <div className={` col-lg-2 col-md-4 text-center${value.theme}`}>
                            <div className=" category">
                                <div className=" category">
                                    <NavLink to={'allseason-fruits'} onClick={() => handleClick()}><img src="assets/img/products/product-img-8.jpg" alt /></NavLink>
                                </div>
                            </div>
                            <h5 className='mt-3'>All Season Fruits</h5>
                        </div> */}

                </div>
            </div>
        </div>
        // </div >
    );
}

export default Category;