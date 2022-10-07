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
        <button
          className="p-4 bg-black"
          disabled={currentPage === 1}
          onClick={onPrevious}
        ></button>
      </li>
      <div className="h-10 border flex rounded overflow-hidden">
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li className="h-full px-4 py-0 flex items-center dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={`h-full px-4 py-0 flex items-center hover:bg-base-300 ${
                pageNumber === currentPage &&
                "bg-black text-white hover:bg-black"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      </div>
      <li className={`${currentPage === lastPage && "disabled"}`}>
        <button
          className="p-4 bg-black "
          disabled={currentPage === lastPage}
          onClick={onNext}
        ></button>
      </li>
    </ul>
  );
}

export default PaginationBar;
