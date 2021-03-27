import React , {useState}from "react";

import "./css/sortingground.css";

import SortingController from './SortingController';

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

const SortingGround = () => {
  const [record, setRecord] = useState(null);
  
  return (
		<>
    <div className="sorting-ground container-fluid">
      <div className="sorting-ground-row row">
        {record && record.currentList.map((l, i, list) => <Bars key={i} height={l} num={list.length} />)}
      </div>
    </div>
		<div className='sorting-ground-controller-wrapper container'>
			<SortingController setRecord={setRecord} />
		</div>
		</>
  );
};

export default SortingGround;
