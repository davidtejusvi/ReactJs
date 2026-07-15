import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination'

const PaginationProducts = () => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1)

    const fetchData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products');
            console.log("res", res.data)
            if (res.data && res.data.products) {
                setProducts(res.data.products)
                console.log("products", products)
                setTotal(res.data.total)
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='product-container'>
            <div style={{ margin: "10px" }}>Product List</div>
            <div className='product-list'>
                {
                    products &&
                        products.length ? (
                        products.map((product) => (
                            <li>
                                <img src={product.thumbnail} alt={product.title} />
                                <span style={{ fontWeight: "bold" }}>{product.title}</span>-
                                {product.price}
                            </li>
                        ))) : (<div>loading</div>)
                }
            </div>
            <Pagination total={total} products={products} page={page} setPage={setPage} />
        </div>
    )
}

export default PaginationProducts