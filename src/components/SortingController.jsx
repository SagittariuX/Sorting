import React, { useEffect, useState, useRef } from "react";
import "./css/sortingcontroller.css";

import BubbleSort, { BubbleSortText } from "../algo/BubbleSort";
import SelectionSort, {SelectionSortText} from "../algo/SelectionSort";
import MergeSort, {MergeSortText} from "../algo/MergeSort";

import SortingOptions from "./SortingOptions";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ReplayIcon from "@material-ui/icons/Replay";
// import FastForwardIcon from "@material-ui/icons/FastForward";

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
  "Selection Sort": SelectionSort,
  "Merge Sort": MergeSort,
};

const TextAlgo = {
  "Bubble Sort": <BubbleSortText />,
  "Selection Sort": <SelectionSortText />,
  'Merge Sort': <MergeSortText />,
};

const SortingController = ({ setRecord }) => {
  const intervalSpeed = useRef(1000);
  const setIntervalSpeed = (speed) => (intervalSpeed.current = speed);

  const [algoRef, setAlgoRef] = useState("Bubble Sort"); //Keeps track of which algorithm is selected
  // ^ a reference to the algorithms stored in ../algo
  const [recordList, setRecordList] = useState([]); //Keeps track of all the steps in the sort
  const [recordTrack, setRecordTrack] = useState(0); //Keeps track of which the current index of recordList
  const [isPaused, setIsPaused] = useState(true); // Keeps track if replay is happening
  const [driverList, setDriverList] = useState(generateList(10));

  //Run BubbleSort on start up
  //Also resets all values when triggered
  useEffect(() => {
    const sort = SortAlgo[algoRef];
    setRecordList(sort(driverList));
    setRecordTrack(0);
    setIsPaused(true);
  }, [algoRef, driverList]);

  //Feeds current record to SortingGround
  useEffect(() => {
    setRecord(recordList[recordTrack]);
  }, [recordList, recordTrack, setRecord]);

  //Setup interval for playing
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

  const setAmount = (amount) => setDriverList(generateList(amount));

  return (
    <>
      <div className="row control-panel-row">
        <div className="sorting-ground-controller-player">
          <ReplayIcon
            onClick={() => {
              setRecordTrack(0);
              setIsPaused(true);
            }}
          />
          <SkipPreviousIcon
            onClick={() => {
              setIsPaused(true);
              setRecordTrack(recordTrack > 0 ? recordTrack - 1 : recordTrack);
            }}
          />
          {isPaused ? (
            <PlayCircleFilledIcon onClick={() => setIsPaused(!isPaused)} />
          ) : (
            <PauseCircleFilledIcon onClick={() => setIsPaused(!isPaused)} />
          )}
          <SkipNextIcon
            onClick={() => {
              setIsPaused(true);
              setRecordTrack(
                recordTrack < recordList.length - 1
                  ? recordTrack + 1
                  : recordTrack
              );
            }}
          />
        </div>
      </div>
      <div className="row control-panel-row">
        <div className="options-description">
          <div className="options-description-split">
            <SortingOptions
              setAlgoRef={setAlgoRef}
              setIntervalSpeed={setIntervalSpeed}
              setAmount={setAmount}
            />
          </div>
          <div className="options-description-split description">{TextAlgo[algoRef]}</div>
        </div>
      </div>
    </>
  );
};

export default SortingController;
