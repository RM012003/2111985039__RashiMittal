import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AuthForm from './components/AuthForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/register" component={() => <AuthForm isRegister={true} />} />
                        <Route path="/login" component={() => <AuthForm isRegister={false} />} />
                        <Route path="/products/:id" component={ProductDetail} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/" component={ProductList} exact />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
