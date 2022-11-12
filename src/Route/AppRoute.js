import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Index from '../containers/Index/Index';
import Index2 from '../containers/Index2/Index2';
import About from '../containers/About/About';
import Cart from '../containers/Cart/Cart';
import Checkout from '../containers/Checkout/Checkout';
import Contact from '../containers/Contact/Contact';
import News from '../containers/News/News';
import Shop from '../containers/Shop/Shop';
import Single_news from '../containers/Single-news/Single_news';
import Single_product from '../containers/Single-product/Single_product';
import Fruit from '../containers/Fruit/Fruit';
import Login_signup from '../containers/Login_signup/Login_signup';
import Publicroute from './Publicroute';
import Privateroute from './Privateroute';
import Search from '../containers/search/Search';
import SeasonWise from '../containers/Categories/SeasonWise';
import { history } from '../history';
import Product from '../admin/containers/product/Product';
import Counter from '../admin/containers/Counter/Counter';
import Category from '../admin/containers/Category/Category';
import Order from '../containers/order/Order';
import OrderData from '../admin/containers/Order/OrderData';
import ClientRoute from './ClientRoute';

function AppRoute(props) {
    return ( 
        <div>
            <Switch>
                <Publicroute path={'/'} exact component={Index} />
                <Publicroute path={'/index'} exact component={Index} />
                <Publicroute path={'/index2'} exact component={Index2} />
                <Publicroute path={'/about'} exact component={About} />
                <ClientRoute path={'/checkout'} exact component={Checkout} />
                <Publicroute path={'/contact'} exact component={Contact} />
                <Publicroute path={'/news'} exact component={News} />
                <Publicroute path={'/shop'} exact component={Shop} />
                <Publicroute path={'/fruit'} exact component={Fruit} />
                <Publicroute path={'/single-new'} exact component={Single_news} />
                <Publicroute path={'/single-product'} exact component={Single_product} />
                <Publicroute path={'/search'} exact component={Search} />
                <Publicroute path={'/login-signup'} exact restricted={true} component={Login_signup} />
                <ClientRoute path={'/cart'} exact component={Cart} />
                <Publicroute path={'/season-fruits'} exact component={SeasonWise} />
                <ClientRoute path={'/order'} exact component={Order} />
                <Privateroute path={'/product'} exact component={Product} />
                <Privateroute path={'/category'} exact component={Category} />
                <Privateroute path={'/orderdata'} exact component={OrderData} />
                <Privateroute path={'/counter'} exact component={Counter} />
            </Switch>
        </div>
    );
}

export default AppRoute;