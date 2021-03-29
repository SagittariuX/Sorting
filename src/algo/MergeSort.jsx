import { RecordList, addRecord, Record } from "../algo/Record";

const MergeSort = (mylist) => {
  let list = [...mylist];
  let records = RecordList(list);
  Sort(list, records, 0, list.length - 1);
  addRecord(records, Record(list, [], [], []));
  return records;
};

const Sort = (list, records, l, r) => {
  if (l >= r) return;
  const m = Math.floor((l + r) / 2);
  Sort(list, records, l, m);
  Sort(list, records, m + 1, r);
  Merge(list, records, l, m, r);
};

const Merge = (list, records, l, m, r) => {
  const len1 = m - l + 1;
  const len2 = r - m;

  const left = new Array(len1);
  const right = new Array(len2);

  for (let i = 0; i < len1; i++) {
    left[i] = list[l + i];
  }

  for (let j = 0; j < len2; j++) {
    right[j] = list[m + 1 + j];
  }

  let i = 0;
  let j = 0;

  let start = l;

  while (i < len1 && j < len2) {
    addRecord(records, Record(list, [l + i, m + 1 + j], [], []));
    if (left[i] <= right[j]) {
      list[start] = left[i];
      addRecord(records, Record(list, [], [], [l + i, m + 1 + j]));
      i++;
    } else {
      list[start] = right[j];
      addRecord(records, Record(list, [], [], [l + i, m + 1 + j]));
      j++;
    }
    start++;
  }

  while (i < len1) {
    list[start] = left[i];
    addRecord(records, Record(list, [], [], [l + i]));
    i++;
    start++;
  }

  while (j < len2) {
    list[start] = right[j];
    addRecord(records, Record(list, [], [], [m + 1 + j]));
    j++;
    start++;
  }
};

export default MergeSort;

const MergeSortText = () => {
  return (
    <>
      <div>
        <h1>Merge Sort</h1>
      </div>
      <div>
        <p1>
          A divide and conquer algorithm. It divides the input array into two
          halves, calls itself for the two halves, and then merges the two
          sorted halves. A dedicated merge function will be used to merge the halves. 
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.geeksforgeeks.org/merge-sort/"
          >
            Learn More
          </a>
        </p1>
      </div>
    </>
  );
};

export { MergeSortText };
