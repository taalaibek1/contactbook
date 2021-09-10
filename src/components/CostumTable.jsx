import React, { useContext, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsContext } from '../contexts/ProductsContext'

const CostumTable = () => {
    const { getProducts, products, deleteProducts } = useContext(productsContext)

    useEffect(() => {
        getProducts()
    }, [])
    console.log(products)

    return (
        <>
            {
                products ? (
                    <Table striped bordered hover variant="dark" >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description </th>
                                <th>Price</th>
                                <th>Photo</th>
                                <th>#</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td><img width="100" height="100" src={item.photo} alt="" /></td>
                                        <td>
                                            <Button onClick={() => deleteProducts(item.id)}>Delete</Button>
                                        </td>
                                        <td>
                                            <Link to={`/edit/${item.id}`}>
                                                <Button>Edit</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table >
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </>

    )
}

export default CostumTable;