import React, { useEffect, useState } from "react";
import "./css/sortingcontroller.css";

import BubbleSort from "../algo/BubbleSort";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

//Generates random integer from 1 - max
const getRandomInt = (max) => {
  return 1 + Math.floor(Math.random() * Math.floor(max - 1));
};

const generateList = (num) => {
  let list = [];
  for (let i = 0; i < num; i++) list.push(getRandomInt(100));

  return list;
};

const SortAlgo = {
  "Bubble Sort": BubbleSort,
};

const SortingController = ({ setRecord }) => {
  const [algo, setAlgo] = useState("Bubble Sort");//Keeps track of which algorithm is selected
  const [recordList, setRecordList] = useState([]);//Keeps track of all the steps in the sort
	const [recordTrack, setRecordTrack] = useState(0);//Keeps track of which the current index of recordList

  //Run BubbleSort on start up
  useEffect(() => {
    const sort = SortAlgo[algo];
    setRecordList(sort(generateList(10)));
  }, [algo]);

  //Feed initial state to SortingGround
  useEffect(() => {
    setRecord(recordList[recordTrack]);
  }, [recordList, recordTrack]);

  // console.log(recordList);
  return (
    <>
      <div className="row">
        <div className="sorting-ground-controller-player">
          <SkipPreviousIcon />
          <PlayCircleFilledIcon />
          <SkipNextIcon />
        </div>
      </div>
    </>
  );
};

export default SortingController;
