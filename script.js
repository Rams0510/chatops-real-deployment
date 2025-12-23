let count = 0;
setInterval(() => {
  count++;
  document.getElementById("status").innerText =
    "🔥 Live deployment active for " + count + " seconds";
}, 1000);
