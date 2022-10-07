import React from "react";
import { usePagination, DOTS } from "../hooks";
function PaginationBar(props) {
  const {
    onPageChange,
    totalCount = 1,
    siblingCount = 1,
    currentPage = 1,
    pageSize = 1,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  console.log({ "paginationRange.length": paginationRange });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="flex justify-center items-center gap-2">
      <li className={`${currentPage === 1 && "disabled"}`}>
        <button disabled={currentPage === 1} onClick={onPrevious}>
          <div className="p-4 bg-black" />
        </button>
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="p-4 dots">&#8230;</li>;
        }

        return (
          <li
            className={`p-4 ${
              pageNumber === currentPage && "bg-black text-white "
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li className={`${currentPage === lastPage && "disabled"}`}>
        <button
          className="p-4 bg-black "
          disabled={currentPage === lastPage}
          onClick={onNext}
        >
          <div className="arrow right" />
        </button>
      </li>
    </ul>
  );
}

export default PaginationBar;
