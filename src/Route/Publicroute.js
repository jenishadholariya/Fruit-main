import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { isLogin } from '../utility/Index';


function Publicroute({ component: Component, restricted = false, ...rest }) {
    const auth = useSelector(state => state.auth)

    console.log("puuuuuuuuuuuuuuuuuuuuuuuuuuuuu",auth);
    return (
        <Route {...rest} render={props => (
            auth.user !== null && restricted ?
                <>
                    <Header />
                    <Redirect to={'/'} />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </>

        )}

        />
    );
}

export default Publicroute;