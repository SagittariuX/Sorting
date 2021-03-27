const RecordList = (list) => {
  return [{
    currentList: [...list],
  }];
};

const addRecord = (recordList, list) => {
  recordList.push({
    currentList: [...list],
  });
};

export { RecordList, addRecord };
