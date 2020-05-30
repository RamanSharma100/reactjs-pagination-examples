import React, { useState, useEffect } from 'react';

const PaginationTwo = (props) => {
  const [countPages, setCountPages] = useState(1);
  const { postLength, postPerPage, onHandlePost } = props;
  const pages = Math.ceil(postLength / postPerPage);
  const handleCount = (type) => {
    if (type === 'prev') {
      setCountPages(countPages !== 1 ? countPages - 1 : countPages);
    } else if (type === 'next') {
      setCountPages(countPages !== pages ? countPages + 1 : countPages);
    }
  };
  useEffect(() => {
    const value = countPages * postPerPage;
    const start = value - postPerPage;
    const end = value;
    onHandlePost(start, end);
    console.log(countPages); // eslint-disable-next-line
  }, [countPages]);
  const handlePage = (e) => {
    setCountPages(e.target.textContent);
  };
  const postsPages = [];
  const pagesTotal = () => {
    for (let i = 1; i <= pages; i++) {
      if (i === countPages) {
        postsPages.push(
          <li
            key={i}
            className="page-item active"
            id={i}
            onClick={(e) => handlePage(e)}>
            <button className="page-link">{i}</button>
          </li>
        );
      } else {
        postsPages.push(
          <li
            key={i}
            className="page-item"
            id={i}
            onClick={(e) => handlePage(e)}>
            <button className="page-link">{i}</button>
          </li>
        );
      }
    }
  };
  pagesTotal();
  return (
    <div className="col-md-12 pagination d-flex justify-content-around py-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={() => handleCount('prev')}>
              Previous
            </button>
          </li>
          {postsPages.map((postPage) => postPage)}
          <li className="page-item">
            <button className="page-link" onClick={() => handleCount('next')}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationTwo;
