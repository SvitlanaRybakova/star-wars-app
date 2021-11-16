import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({
  currentPage,
  setCurrentPage,
  isPreviousData,
  hasMore,
  count
}) => {
  return (
    <>
      <div className="pagination d-flex justify-content-between align-items-center mt-4 my-5">
        <Button
          className="btn btn-dark"
          onClick={() =>
            setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
          }
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>

        <span>
          Current Page: {currentPage} of {Math.ceil(count / 10)}
        </span>

        <Button
          className="btn btn-dark"
          onClick={() => {
            if (!isPreviousData && hasMore) {
              setCurrentPage((currentPage) => currentPage + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !hasMore}
        >
          Next Page
        </Button>
      </div>
    </>
  );
};

export default Pagination;
