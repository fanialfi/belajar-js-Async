function logApk(data) {
  for (let i = 0; i <= data; i++) {
    console.log(`log ke ${i}`);
  }
}

addEventListener("message", function (ev) {
  logApk(ev.data);
  postMessage("done");
});
