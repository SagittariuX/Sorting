import React from "react";

const SortingOptions = ({ setAlgo }) => {
  return (
    <>
      <div className="btn-group-vertical" role="group">
        <button
          type="button"
          className="btn btn-secondary"
          aria-label="Bubble Sort"
          onClick={(e) => setAlgo(e.target.ariaLabel)}
        >
          Bubble Sort
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          aria-label="Selection Sort"
          onClick={(e) => setAlgo(e.target.ariaLabel)}
        >
          Selection Sort
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          aria-label="Merge Sort"
          onClick={(e) => setAlgo(e.target.ariaLabel)}
        >
          Merge Sort
        </button>

      </div>
    </>
  );
};

export default SortingOptions;
