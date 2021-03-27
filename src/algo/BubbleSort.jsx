import { RecordList, addRecord, Record } from "../algo/Record";

const BubbleSort = (list) => {
  const n = list.length;
  let records = RecordList(list);
  console.log(list);
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
