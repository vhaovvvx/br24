import React, { useState, useEffect } from 'react';
import './Pagination.scss';

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    //=> lay so hien tai dang dc active roi setCurrentPage sau do chay tuong tu nhu ham duoi
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    //=> 1 * 5 - 5 = 0
    //=> 2 * 5 - 5 = 5
    //=> 3 * 5 - 5 = 10
    const startIndex = currentPage * dataLimit - dataLimit;
    //=> 0 + 5 = 5 
    //=> 5 + 5 = 10 
    //=> 10 + 5 = 15 
    const endIndex = startIndex + dataLimit;
    // slice(0, 5) lay 5 gia tri dau tien cua mang
    // slice(5, 10) lay 5 gia tri tiep theo tinh tu thang so 5
    // slice(10, 15) lay 5 gia tri tiep theo tinh tu thang so 10
    return data.slice(startIndex, endIndex); 
  };

  //=> show page limit
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {/* show the posts, 10 posts at a time */}
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>

      <div className='pagination'>
        <ul>
          <li 
          onClick={goToPreviousPage}
          className={`${currentPage === 1 ? 'disabled' : ''}`}
          >prev</li>
          {/* show page numbers */}
         
          {getPaginationGroup().map((item, index) => (
            <li
              key={index}
              onClick={changePage}
              className={`${currentPage === item ? 'active' : null}`}
            >
            <span>{item}</span>
          </li>
          ))}
          <li 
          onClick={goToNextPage}
          className={`${currentPage === pages ? 'disabled' : ''}`}
          >next</li>
        </ul>
      </div>
    </>
  );
}

export default Pagination
