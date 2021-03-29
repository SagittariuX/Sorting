import { RecordList, addRecord, Record } from "../algo/Record";

const BubbleSort = (mylist) => {
  let list = [...mylist];
  const n = list.length;

  let records = RecordList(list);
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      addRecord(records, Record(list, [j], [], [])); // Before sorting

      if (list[j] > list[j + 1]) {
        addRecord(records, Record(list, [], [j, j + 1], [])); // During sorting
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        addRecord(records, Record(list, [], [], [j, j + 1])); // After switch
      }

      addRecord(records, Record(list, [], [], [])); // After sorting
    }
  }
  return records;
};

export default BubbleSort;

const BubbleSortText = () => {
  return (
    <>
      <div>
        <h1>Bubble Sort</h1>
      </div>
      <div>
        <p1>
          A sorting algorithm that repeatedly steps through the list, compares
          adjacent elements and swaps them if they are in the wrong order. This
          operation is repeated until all elements are sorted.{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.geeksforgeeks.org/bubble-sort/"
          >
            Learn More
          </a>
        </p1>
      </div>
    </>
  );
};

export { BubbleSortText };
