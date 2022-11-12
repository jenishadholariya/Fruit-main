import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function ClientRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    console.log("cllllllllllllllllllllllllllllllllll", auth.user);
    return (
        <Route {...rest} render={props => (
            auth.user !== null ?
                <>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Redirect to={'/login-signup'} />
                    <Footer />
                </>

        )}
        />
    );
}

export default ClientRoute;