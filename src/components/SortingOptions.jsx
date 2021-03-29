import React, { useState } from "react";
import { Button ,ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

const algorithmOptions = ["Bubble Sort", "Selection Sort", "Merge Sort"];

const amountOptions = [10, 25, 50, 100];

const speedDefinition = {
  "1X": 1000,
  "2X": 500,
  "4x": 250,
  "8X": 125,
};

const SortingOptions = ({setAlgoRef, setIntervalSpeed, setAmount }) => {
  const [displayAlgo, setDisplayAlgo] = useState("Bubble Sort");
  const [displaySpeed, setDisplaySpeed] = useState("1X");
  const [displayAmount, setDisplayAmount] = useState(10);

  const handleAlgorithmDropdownClick = (value) => {
    setDisplayAlgo(value);
    setAlgoRef(value);
  };

  const handleSpeedDropdownClick = (key, value) => {
    setDisplaySpeed(key);
    setIntervalSpeed(value);
  };

  const handleAmountDropdownClick = (value) => {
    setDisplayAmount(value);
    setAmount(value);
  };

  return (
    <>
      <ButtonGroup vertical>
        <Button variant='secondary' className='options-button' onClick={() => setAmount(displayAmount)}>Randomize</Button>
        <DropdownButton
          className='options-button'
          id="algorithm-dropdown"
          variant="secondary"
          title={displayAlgo}
        >
          {algorithmOptions.map((value) => {
            return (
              <Dropdown.Item
                aria-label={value}
                active={displayAlgo === value}
                onClick={() => handleAlgorithmDropdownClick(value)}
              >
                {value}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <DropdownButton
          className='options-button'
          id="amount-dropdown"
          variant="secondary"
          title={`Size: ${displayAmount}`}
        >
          {amountOptions.map((value) => {
            return (
              <Dropdown.Item
                aria-label={value}
                active={displayAmount === value}
                onClick={() => handleAmountDropdownClick(value)}
              >
                {value}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <DropdownButton
          className='options-button'
          id="speed-dropdown"
          variant="secondary"
          title={`Speed: ${displaySpeed}`}
        >
          {Object.entries(speedDefinition).map(([key, value]) => {
            return (
              <Dropdown.Item
                aria-label={key}
                active={displaySpeed === key}
                onClick={() => handleSpeedDropdownClick(key, value)}
              >
                {key}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </ButtonGroup>
    </>
  );
};

export default SortingOptions;
