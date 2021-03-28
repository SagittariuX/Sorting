import React, { useState } from "react";

import "./css/sortingground.css";

import SortingController from "./SortingController";

const Bar = ({ height, num, watching, sorting, sorted }) => {
  let name = "my-bar";
  name += watching ? " watching" : "";
  name += sorting ? " sorting" : "";
  name += sorted ? " sorted" : "";

  return (
    <div
      className={name}
      style={{
        height: `${height}%`,
        width: `${1.0 / num}%`,
        margin: "0 .1rem",
      }}
    />
  );
};

const generateBarsFromRecord = ({ currentList, watching, sorting, sorted }) => {
  let barList = [];
  const num = currentList.length;
  currentList.forEach((value, index) =>
    barList.push(
      <Bar
        key={index}
        height={value}
        num={num}
        watching={watching.includes(index)}
        sorting={sorting.includes(index)}
        sorted={sorted.includes(index)}
      />
    )
  );

  return barList;
};

const SortingGround = () => {
  const [record, setRecord] = useState(null);

  return (
    <>
      <div className="sorting-ground container-fluid">
        <div className="sorting-ground-row row">
          {record && generateBarsFromRecord(record)}
        </div>
      </div>
      <div className="sorting-ground-controller-wrapper container">
        
        <SortingController setRecord={setRecord}/>
      </div>
    </>
  );
};

export default SortingGround;
