
const Record = (list, watching, sorting, sorted) => {
  return {
    currentList: [...list], // currently what the list looks like
    watching: watching, // indexes of which element is being operated on
    sorting: sorting, // indexes of the elements that are being sorted
    sorted: sorted, // indexes of the elements after the sort
  }
}

const RecordList = (list) => {
  return [Record(list, [], [], [])];
};

const addRecord = (recordList, record) => {
  recordList.push(record);
};

export { RecordList, addRecord, Record };
