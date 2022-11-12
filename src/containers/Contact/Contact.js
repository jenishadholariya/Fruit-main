import React, { useContext } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { themeContext } from '../../context/ThemeContext';

function Contact(props) {

    let schema = yup.object().shape({
        name: yup.string().required("please enter your name."),
        email: yup.string().required("please enter your email id.").email("please enter valid email id."),
        phone: yup.string().required("please enter your mobile number."),
        subject: yup.string().required("please enter subject."),

    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { errors, handleBlur, handleSubmit, handleChange, touched } = formik;
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
                                    <p>Get 24/7 Support</p>
                                    <h1>Contact us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* contact form */}
                <div className="contact-from-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-5 mb-lg-0">
                                <div className="form-title">
                                    <h2>Have you any question?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                                </div>
                                <div id="form_status" />
                                <div className="contact-form">
                                    <Formik values={formik}>
                                        <Form type="POST" id="fruitkha-contact" onSubmit={handleSubmit}>
                                            <p>
                                                <input type="text" placeholder="Name" name="name" id="name" onChange={handleChange} onBlur={handleBlur} />
                                                <p className='error'>{errors.name && touched.name ? errors.name : ''}</p>
                                            </p>
                                            <p>
                                                <input type="email" placeholder="Email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} />
                                                <p className='error'>{errors.email && touched.email ? errors.email : ''}</p>

                                            </p>
                                            <p>
                                                <input type="tel" placeholder="Phone" name="phone" id="phone" maxLength={10} onChange={handleChange} onBlur={handleBlur} />
                                                <p className='error'>{errors.phone && touched.phone ? errors.phone : ''}</p>

                                            </p>
                                            <p>
                                                <input type="text" placeholder="Subject" name="subject" id="subject" onChange={handleChange} onBlur={handleBlur} />
                                                <p className='error'>{errors.subject && touched.subject ? errors.subject : ''}</p>

                                            </p>
                                            <p><textarea name="message" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} /></p>

                                            <p><input type="submit" defaultValue="Submit" /></p>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact-form-wrap">
                                    <div className="contact-form-box">
                                        <h4><i className="fas fa-map" /> Shop Address</h4>
                                        <p>34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Country Name</p>
                                    </div>
                                    <div className="contact-form-box">
                                        <h4><i className="far fa-clock" /> Shop Hours</h4>
                                        <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM </p>
                                    </div>
                                    <div className="contact-form-box">
                                        <h4><i className="fas fa-address-book" /> Contact</h4>
                                        <p>Phone: +00 111 222 3333 <br /> Email: support@fruitkha.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end contact form */}
                {/* find our location */}
                <div className="find-location blue-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p> <i className="fas fa-map-marker-alt" /> Find Our Location</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end find our location */}
                {/* google map section */}
                <div className="embed-responsive embed-responsive-21by9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen className="embed-responsive-item" />
                </div>
                {/* end google map section */}
            </div>
        </div>
    );
}

export default Contact;