console.log("F.R.I.E.N.D. main.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Main connection ready");

  if (typeof FRIEND_APP !== "undefined") {
    FRIEND_APP.init();
  }
});
