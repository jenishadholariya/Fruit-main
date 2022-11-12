import './App.css';
import ToggleContext from './context/ThemeContext';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store';
import AppRoute from './Route/AppRoute';
import Index from './containers/Index/Index';
import Index2 from './containers/Index2/Index2';
import About from './containers/About/About';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';
import Contact from './containers/Contact/Contact';
import News from './containers/News/News';
import Shop from './containers/Shop/Shop';
import Single_news from './containers/Single-news/Single_news';
import Single_product from './containers/Single-product/Single_product';
import Fruit from './containers/Fruit/Fruit';
import Login_signup from './containers/Login_signup/Login_signup';
import Publicroute from './Route/Publicroute';
import Privateroute from './Route/Privateroute';
import Search from './containers/search/Search';
import SeasonWise from './containers/Categories/SeasonWise';
import { history } from './history';
import Product from './admin/containers/product/Product';
import Counter from './admin/containers/Counter/Counter';
import Category from './admin/containers/Category/Category';
import Order from './containers/order/Order';
import OrderData from './admin/containers/Order/OrderData';
import ClientRoute from './Route/ClientRoute';

import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

function App() {

  return (
    <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ToggleContext>
            <PersistGate loading={null} persistor={persistor}>
              <AppRoute />
            </PersistGate>
          </ToggleContext>
        </Provider>
      </SnackbarProvider>
  );
}

export default App;
