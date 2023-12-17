import React, { useState, useEffect } from 'react';

const PaginationItem = ({ data, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => handleClick(i)}
          style={{ cursor: 'pointer', margin: '5px', padding: '6px 12px', border: '1px solid black', background: 'black', color: 'white' }}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  const renderData = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return currentItems.map((item, index) => (
      <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
        {item}
      </div>
    ));
  };

  return (
    <div>
        <div style={{display: 'flex', margin: '50px 0px'}}>
        {renderData()}
        </div>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', marginTop: '160px' }}>
        {renderPagination()}
      </ul>
    </div>
  );
};

export default PaginationItem;