import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import MainPage from './Pages/MainPage';
import ProdunctsContextProvider from './contexts/ProductsContext';
import AddPage from './Pages/AddPage';
import EditPage from './Pages/EditPage';

const Routes = () => {
    return (
        <ProdunctsContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/add" component={AddPage} />
                    <Route exact path="/edit/:key" component={EditPage} />
                </Switch>
            </BrowserRouter>
        </ProdunctsContextProvider>
    );
};

export default Routes;