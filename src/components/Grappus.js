function task(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf("s") !== -1 || arr[i].indexOf("e") !== -1) {
      res.push(arr[i]);
    }
  }
  return res.join().replace(/,/g, "+");
}
console.log(task(["abs", "dbs", "cbs", "hello", "wordy", "send help"]));
