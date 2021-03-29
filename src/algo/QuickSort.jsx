import { RecordList, addRecord, Record } from "../algo/Record";

const QuickSort = (mylist) => {
  let list = [...mylist];
  let records = RecordList(list);

  Sort(list, records, 0, list.length - 1);
  addRecord(records, Record(list, [], [], []));
  return records;
};

const Sort = (list, records, l, r) => {
  if (l < r) {
    const part = Partition(list, records, l, r);

    Sort(list, records, l, part - 1);
    Sort(list, records, part + 1, r);
  }
};

const Partition = (list, records, l, r) => {
  const pivot = list[r];
  let i = l - 1;
  addRecord(records, Record(list, [r], [], []));
  for (let j = l; j <= r - 1; j++) {
    addRecord(records, Record(list, [r], [j], []));

    if (list[j] < pivot) {
      i++;
      addRecord(records, Record(list, [r], [j, i], []));
      swap(list, i, j);
      addRecord(records, Record(list, [r], [], [i, j]));
    }
  }

  addRecord(records, Record(list, [], [r, i + 1], []));
  swap(list, i + 1, r);
  addRecord(records, Record(list, [], [], [r, i + 1]));
  return i + 1;
};

const swap = (list, i, j) => {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
};

export default QuickSort;

const QuickSortText = () => {
  return (
    <>
      <div>
        <h1>Quick Sort</h1>
      </div>
      <div>
        <p1>
          A divide and conquer algorithm. It picks an element as pivot and
          partitions the given array around the pivot. The key to this
          algorithm is partitioning the array. The partition will place all
          elements smaller than the pivot before it and all larger elements after
          it.{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.geeksforgeeks.org/quick-sort/"
          >
            Learn More
          </a>
        </p1>
      </div>
    </>
  );
};

export { QuickSortText };
