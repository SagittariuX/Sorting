import React, { useEffect, useState, useRef } from "react";
import "./css/sortingcontroller.css";

import BubbleSort from "../algo/BubbleSort";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
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
  const [algo, setAlgo] = useState("Bubble Sort"); //Keeps track of which algorithm is selected
  const [recordList, setRecordList] = useState([]); //Keeps track of all the steps in the sort
  const [recordTrack, setRecordTrack] = useState(0); //Keeps track of which the current index of recordList
  const [isPaused, setIsPaused] = useState(true); // Keeps track if replay is happening

  const intervalSpeed = useRef(100);

  //Run BubbleSort on start up
  useEffect(() => {
    const sort = SortAlgo[algo];
    setRecordList(sort(generateList(10)));
  }, [algo]);

  //Feed initial state to SortingGround
  useEffect(() => {
    console.log("update");
    setRecord(recordList[recordTrack]);
  }, [recordList, recordTrack, setRecord]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (recordTrack === recordList.length - 1) {
        clearInterval(interval);
        setIsPaused(true);
        return;
      }
      setRecordTrack((recordTrack) => recordTrack + 1);
    }, intervalSpeed.current);
    return () => clearInterval(interval);
  }, [isPaused, recordTrack, recordList]);

  return (
    <>
      <div className="row">
        <div className="sorting-ground-controller-player">
          <SkipPreviousIcon onClick={() => {
            setIsPaused(true)
            setRecordTrack(recordTrack > 0 ? recordTrack - 1 : recordTrack)
          }}/>
          {isPaused ? (
            <PlayCircleFilledIcon onClick={() => setIsPaused(!isPaused)} />
          ) : (
            <PauseCircleFilledIcon onClick={() => setIsPaused(!isPaused)} />
          )}
          <SkipNextIcon onClick={() => {
            setIsPaused(true)
            setRecordTrack(recordTrack < recordList.length-1 ? recordTrack + 1 : recordTrack)
          }}/>
        </div>
      </div>
    </>
  );
};

export default SortingController;
