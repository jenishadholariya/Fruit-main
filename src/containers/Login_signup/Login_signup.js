import React, { useContext, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { forgotAction, goggleSignInAction, singInAction, singUpAction } from '../../redux/Action/auth.action';
import { themeContext } from '../../context/ThemeContext';
import GoogleIcon from '@mui/icons-material/Google';

function Login_signup(props) {
    const [user, setUser] = useState('login')
    const [forgot, setForgot] = useState('false')

    let schemaobj, initialval;
    if (forgot === 'true') {
        schemaobj = {
            email: yup.string().required("please enter email.").email("please enter valid email."),
        }
        initialval = {
            email: '',
        }
    } else if (user === 'login') {
        schemaobj = {
            email: yup.string().required("please enter email.").email("please enter valid email."),
            password: yup.string().required("please enter password."),

        }
        initialval = {
            password: '',
            email: '',

        }
    } else if (user === 'signup') {
        schemaobj = {
            name: yup.string().required("please enter name."),
            email: yup.string().required("please enter email id.").email("please enter valid email."),
            password: yup.string().required("please enter password.")
        }
        initialval = {
            name: '',
            password: '',
            email: '',
        }

    }

    let schema = yup.object().shape(schemaobj);

    const dispath = useDispatch()
    const handledata = (values) => {
        // let localdata = JSON.parse(localStorage.getItem("Frutikha"))
        // // localdata.push(values)
        // // localStorage.setItem("user", JSON.stringify(localdata))

        // if (localdata === null) {
        //     localStorage.setItem("Frutikha", JSON.stringify([values]))
        // } else {
        //     localdata.push(values)
        //     localStorage.setItem("Frutikha", JSON.stringify(localdata))
        // }
        // console.log(values);
        dispath(singUpAction(values))
    }

    const handleLogin = (values) => {
        // localStorage.setItem("Frutikha", "123")
        dispath(singInAction(values))
    }

    const formikobj = useFormik({
        initialValues: initialval,
        validationSchema: schema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            if (user === 'login' && forgot === 'false') {
                handleLogin(values)
            } else if (user === 'signup' && forgot === 'false') {
                handledata(values)
            } else if (forgot === 'true') {
                dispath(forgotAction(values))
                console.log("hyy");
            }
        },
        enableReinitialize: true,
    });

    const googleSignIn = () => {
        dispath(goggleSignInAction())
    }

    const { handleChange, errors, handleSubmit, touched, handleBlur } = formikobj;
    const value = useContext(themeContext);
    return (
        <div>
            <div className={`${value.theme}`}> 
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
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Fresh and Organic </p>
                                    {
                                        forgot === 'true' ?
                                            <h1>Forgot password</h1>
                                            :
                                            user === 'login' ?
                                                <h1>Login</h1>
                                                :
                                                <h1>signup</h1>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact form */}
                <div className="contact-from-section mt-100 mb-100 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-5 mb-lg-0 m-auto" >

                                <div id="form_status m-auto" />
                                <div className="contact-form ">
                                    <Formik values={formikobj}>
                                        <Form id="fruitkha-contact" onSubmit={handleSubmit}>
                                            {
                                                forgot === 'true' ?
                                                    null
                                                    :
                                                    user === 'login' ?
                                                        null
                                                        :
                                                        <p>
                                                            <input type="text" placeholder="Name" name="name" id="name" onChange={handleChange} onBlur={handleBlur} />
                                                            <p className='error'>{errors.name && touched.name ? errors.name : ''}</p>
                                                        </p>
                                            }
                                            {
                                                forgot === 'true' ?
                                                    <p>
                                                        <input type="email" placeholder="Email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} />
                                                        <p className='error'>{errors.email && touched.email ? errors.email : ''}</p>
                                                    </p>
                                                    :
                                                    user === 'login' ?
                                                        <p>
                                                            <input type="email" placeholder="Email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} />
                                                            <p className='error'>{errors.email && touched.email ? errors.email : ''}</p>
                                                        </p>
                                                        :
                                                        <p>
                                                            <input type="email" placeholder="Email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} />
                                                            <p className='error'>{errors.email && touched.email ? errors.email : ''}</p>
                                                        </p>
                                            }
                                            {forgot === 'true' ?
                                                null
                                                :
                                                user === 'login' ?
                                                    < >
                                                        <p>
                                                            <input type="password" placeholder="password" name="password" id="password" onChange={handleChange} onBlur={handleBlur} />
                                                            <p className='error'>{errors.password && touched.password ? errors.password : ''}</p>
                                                        </p>
                                                        <div>
                                                            <input id="checkbox2" type="checkbox" onClick={() => setForgot('true')} /> <label > Forgot your password ? </label>
                                                        </div>
                                                    </>
                                                    :
                                                    <p>
                                                        <input type="password" placeholder="password" name="password" id="password" onChange={handleChange} onBlur={handleBlur} />
                                                        <p className='error'>{errors.password && touched.password ? errors.password : ''}</p>
                                                    </p>
                                            }
                                            {
                                                forgot === 'true' ?
                                                    <p><button type="submit" className='login'>Submit</button></p>
                                                    :
                                                    user === 'login' ?
                                                        <>
                                                            <p><button type="submit" className='login'>Login</button></p>
                                                            {/* <h6 >or </h6> */}
                                                            <div><button type="submit" className='login' onClick={() => { googleSignIn() }}>Login With <span  title='google'><GoogleIcon/></span></button></div>
                                                            
                                                        </>
                                                        :
                                                        <>
                                                        <p><button type="submit" className='login'>Signup</button></p>
                                                        <div><button type="submit" className='login' onClick={() => { googleSignIn() }}>Login With <span><GoogleIcon/></span></ button></div>
                                                        </>
                                            }
                                            {forgot === 'true' ?
                                                <p>Go back to login / signup <a type="submit" onClick={() => setForgot('false')}><span> back</span></a>
                                                </p>
                                                :
                                                user === 'login' ?
                                                    <p>create an new account <a type="submit" onClick={() => setUser('signup')}><span>signup</span> </a>
                                                    </p>
                                                    :
                                                    <p>already an account <a type="submit" onClick={() => setUser('login')}><span>login</span></a>
                                                    </p>
                                            }
                                        </Form>
                                    </Formik>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* end contact form */}
            </div >
        </div>
    );
}

export default Login_signup;