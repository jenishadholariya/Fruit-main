import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../admin/components/layout/Layout';

function Privateroute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)
    console.log("prrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",auth.user);
    return (
        <Route {...rest} render={props => (
            auth.user !== null && auth.user.role === 'admin' ?
                <>
                    <Layout>
                        <Component {...props} />
                    </Layout>
                </>
                :
                <Redirect to={'/'} />
        )}
        />
    );
}

export default Privateroute;