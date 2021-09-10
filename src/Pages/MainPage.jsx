import React from 'react';
import CostumTable from '../components/CostumTable';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainPage = () => {

    return (
        <div>
            <h1>MainPage</h1>
            <Link to="/add" >
                <Button>Создать новый продукт</Button>
            </Link>
            <CostumTable />
            <ToastContainer />
        </div>
    );
};

export default MainPage;