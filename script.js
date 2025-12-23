const now = new Date();

document.getElementById("status").innerHTML =
  "🔥 Deployment triggered LIVE from Google Colab!<br><br>" +
  "🕒 Deployed at: " + now.toLocaleString();
