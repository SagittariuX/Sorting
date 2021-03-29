import { RecordList, addRecord, Record } from "../algo/Record";

const SelectionSort = (mylist) => {
  let list = [...mylist];
  let records = RecordList(list);

  for (let i = 0; i < list.length - 1; i++) {
    let min = i;
    addRecord(records, Record(list, [min], [], [])); // Before sorting
    for (let j = i + 1; j < list.length; j++) {
      addRecord(records, Record(list, [], [min, j], [])); // Comparing values
      if (list[j] < list[min]) min = j;
    }
    const temp = list[i];
    list[i] = list[min];
    list[min] = temp;
    addRecord(records, Record(list, [], [], [min, i])); //Swap values
  }
  addRecord(records, Record(list, [], [], []));
  return records;
};

export default SelectionSort;

const SelectionSortText = () => {
  return (
    <>
      <div>
        <h1>Selection Sort</h1>
      </div>
      <div>
        <p1>
          An algorithm that repeatedly finds the minimum element (ascending
          order) from the unsorted list and swaps it with the first element of
          the unsorted list. This action is repeated until the list is sorted.{" "}
          <a
            rel='noreferrer'
            target="_blank"
            href="https://www.geeksforgeeks.org/selection-sort/"
          >
            Learn More
          </a>
        </p1>
      </div>
    </>
  );
};

export { SelectionSortText };
