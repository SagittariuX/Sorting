import React from "react";

import "./css/sortingground.css";

import SortingController from './SortingController';

//Generates random integer from 1 - max
const getRandomInt = (max) => {
  return 1 + Math.floor(Math.random() * Math.floor(max - 1));
};

const generateBars = (num) => {
  let list = [];
  for (let i = 0; i < num; i++)
    list.push(<Bars height={getRandomInt(100)} num={num} />);

  return list;
};

const Bars = ({ height, num }) => {
  return (
    <div
      className="my-bar"
      style={{
        height: `${height}%`,
        width: `${1.0 / num}%`,
        margin: "0 .1rem",
      }}
    />
  );
};

const SortingGround = ({ numBars }) => {
  return (
		<>
    <div className="sorting-ground container-fluid">
      <div className="sorting-ground-row row">
        {generateBars(50).map((bar) => bar)}
      </div>
    </div>
		<div className='sorting-ground-controller-wrapper container'>
			<SortingController />
		</div>
		</>
  );
};

export default SortingGround;
