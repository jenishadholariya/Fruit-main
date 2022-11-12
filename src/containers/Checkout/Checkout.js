import { Form, Formik, useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import * as yup from 'yup';
import { history } from '../../history';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { addOrderAction, getOrderAction } from '../../redux/Action/Order.action';


function Checkout(props) {
    const handleClick = () => {
        window.scrollTo({ top: 150, left: 0, behavior: 'smooth' })
    }
    const value = useContext(themeContext);
    const cart = useSelector(state => state.cart)
    const product = useSelector(state => state.product)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const cartData = []
    product.product.map((p) => {
        cart.cart.map((c) => {
            if (p.id === c.id) {
                cartData.push({ ...p, quantity: c.quantity })
            }
        })
    })

    let pTotal = 0
    function productTotal(price, quantity) {
        pTotal = pTotal + Number(price * quantity)
        return Number(price * quantity).toLocaleString("en-US")
    }


    const handleOrder = (values) => {
        history.push('/order')
        handleClick()
        let orderData = {
            email: values.email,
            Address : values.Address,
            phone: values.phone,
            radioGroup: values.radioGroup,
            userId: auth.user,
            product: cartData,
            totalcart: pTotal,
        }
        console.log(values.email);
        dispatch(addOrderAction(orderData))
    }


    let schema = yup.object().shape({
        name: yup.string().required("please enter your name.").matches(/^[aA-zZ\s]+$/, 'Please enter valid name'),
        email: yup.string().required("please enter your email id.").email("please enter valid email id."),
        Address: yup.string().required("please enter your shipping address."),
        phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').required("please enter your mobile number.").min(10).max(10),
        radioGroup: yup.string().required("select any payment method.")
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            Address: '',
            phone: '',
            radioGroup: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            handleOrder(values)
        },
    });


    const { errors, handleBlur, handleSubmit, handleChange, touched } = formik;
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
                                    <h1>Check Out Product</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}

                {/* check out section */}
                <div className="checkout-section mt-150 ">
                    <div className="container">
                        <div className="row ">
                            {/* Your order Details */}
                            <div className="col-lg-4 mb-150">
                                <div className="order-details-wrap">
                                    <table className="order-details">

                                        <thead>
                                            <tr>
                                                <th>Your order Details</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="order-details-body">
                                            <tr>
                                                <td><strong>Product</strong></td>
                                                <td>Total Price</td>
                                            </tr>
                                            {
                                                cartData.map((c, i) => (

                                                    <tr key={i}>
                                                        <td>{c.name}</td>
                                                        <td>${productTotal(c.price, c.quantity)}</td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                        <tbody className="checkout-details">
                                            <tr>
                                                <td>Subtotal</td>
                                                <td>{pTotal}</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>$10</td>
                                            </tr>
                                            <tr>
                                                <td className='table-total'><strong>Total</strong></td>
                                                <td className='table-total'><strong>${pTotal + 10}</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <NavLink className="current-list-item " to={'/cart'}><a onClick={() => handleClick()} className="boxed-btn mt-4">Update Cart</a></NavLink>

                                </div>
                            </div>
                            {/* order placed  */}
                            <div className="col-lg-8 mb-150" >
                                <div className="checkout-accordion-wrap">
                                    <div className="accordion" id="accordionExample">

                                        {/* payment details  */}
                                        {/* <div className="card single-accordion">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        Payment Details
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shipping-address-form">
                                                        <Formik>
                                                            <Form type="POST" id="fruitkha-contact" onSubmit={handleSubmit}>
                                                                <p><RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radioGroup" onChange={handleChange} onBlur={handleBlur}
                                                                >
                                                                    <FormControlLabel value="Case On Delivery" control={<Radio />} label="Cash On Delivery" />
                                                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                                </RadioGroup>
                                                                </p>
                                                                <p className='error'>{errors.radioGroup && touched.radioGroup ? errors.radioGroup : ''}</p>
                                                            </Form>
                                                        </Formik>

                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* shipping address  */}
                                        <div className="card single-accordion">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        Shipping Address
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="billing-address-form">

                                                        <Formik>
                                                            <Form type="POST" id="fruitkha-contact" onSubmit={handleSubmit}>

                                                                {/* <p><RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radioGroup" onChange={handleChange} onBlur={handleBlur}
                                                                >
                                                                    <FormControlLabel value="Case" control={<Radio />} label="Cash On Delivery" />
                                                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                                </RadioGroup>
                                                                </p>
                                                                <p>{errors.radioGroup && touched.radioGroup ? errors.radioGroup : ''}</p> */}

                                                                <p><input type="text" placeholder="Name" name="name" id="name" onChange={handleChange} onBlur={handleBlur} /></p>
                                                                <p className='error'>{errors.name && touched.name ? errors.name : ''}</p>

                                                                <p><input type="text" placeholder="Email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} /></p>
                                                                <p className='error'>{errors.email && touched.email ? errors.email : ''}</p>

                                                                <p><input type="text" placeholder="Address" name="Address" id="Address" onChange={handleChange} onBlur={handleBlur} /></p>
                                                                <p className='error'>{errors.Address && touched.Address ? errors.Address : ''}</p>

                                                                <p><input type="tel" placeholder="Contact Number" name="phone" id="phone" onChange={handleChange} onBlur={handleBlur} /></p>
                                                                <p className='error'>{errors.phone && touched.phone ? errors.phone : ''}</p>


                                                                {/* <p><button className="boxed-btn mt-4" >Place Order</button></p> 
                                                                <p className='error'>{errors.radioGroup && touched.radioGroup ? errors.radioGroup : ''}</p> */}
                                                            </Form>
                                                        </Formik>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card single-accordion">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        Payment Details
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shipping-address-form">
                                                        <Formik>
                                                            <Form type="POST" id="fruitkha-contact" onSubmit={handleSubmit}>
                                                                <p><RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radioGroup" onChange={handleChange} onBlur={handleBlur}
                                                                >
                                                                    <FormControlLabel value="Case On Delivery" control={<Radio />} label="Cash On Delivery" />
                                                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                                </RadioGroup>
                                                                </p>
                                                                <p className='error'>{errors.radioGroup && touched.radioGroup ? errors.radioGroup : ''}</p>

                                                                <p><button className="boxed-btn mt-4" >Place Order</button></p> 
                                                               
                                                            </Form>
                                                        </Formik>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Checkout;