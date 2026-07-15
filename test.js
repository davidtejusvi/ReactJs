import React, { useState } from 'react';
import Pagination from './pagination';
import './pagination.css'

const Test = () => {
    const dummyData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`
    }));
    //console.log(dummyData);
    const itemsperPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsperPage;
    const indexOfFirsttem = indexOfLastItem - itemsperPage;
    const currentListOfItems = dummyData.slice(indexOfFirsttem, indexOfLastItem);
    //console.log(currentListOfItems);
    const handlePageChange = (currentPage) => {
        setCurrentPage(currentPage)
    }
    return (
        <div>
            <h1>Pagination - 1</h1>
            <ul className='list-items'>
                {
                    currentListOfItems.map((listItem) => (
                        <li key={listItem.id}>{listItem.name}</li>
                    ))
                }
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(dummyData.length / itemsperPage)}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default Test