import React, { useState, useEffect } from 'react';

const PaginationOne = (props) => {
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
  }, [countPages, onHandlePost, postPerPage]);
  return (
    <div className="col-md-12 pagination d-flex justify-content-around py-5">
      <button
        href="/#"
        className="btn btn-outline-primary"
        onClick={() => handleCount('prev')}>
        Prev
      </button>
      <button
        href="/#"
        className="btn btn-outline-primary"
        onClick={() => handleCount('next')}>
        Next
      </button>
    </div>
  );
};

export default PaginationOne;
