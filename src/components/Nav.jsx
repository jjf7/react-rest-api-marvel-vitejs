import React from "react";
import { steps } from "../config";

const Nav = ({ page, setPage }) => {
  const handleNextClick = () => {
    setPage(page + steps);
  };

  const handlePrevClick = () => {
    if (page === 0) return setPage(0);
    return setPage(page - steps);
  };
  return (
    <div className="d-flex justify-content-between align-items-center ">
      <p>Page: {page === 0 ? 1 : page / steps + 1}</p>
      <div className="d-flex gap-1">
        <button className="btn  bg-buttom" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="btn  bg-buttom" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Nav;
