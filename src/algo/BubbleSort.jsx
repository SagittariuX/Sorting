import { RecordList, addRecord } from "../algo/Record";

const BubbleSort = (list) => {
	

  const n = list.length;
  let records = RecordList(list);

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
      addRecord(records, list);
    }
  }
	console.log(records);
  return records;
};

export default BubbleSort;
