import React from 'react';

const Pagination = ({ products, total, page, setPage }) => {
    return (
        <>
            {
                products.length ? (<div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                    <span>⬅️</span>
                    {
                        [...Array(total / 10)].map((_, i) => (
                            <span key={i}>{i + 1}</span>
                        ))
                    }

                    <span>➡️</span>
                </div>) : null
            }

        </>
    )
}

export default Pagination