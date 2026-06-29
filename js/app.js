const FRIEND_APP = {
  currentView: "home",

  init() {
    console.log("F.R.I.E.N.D. app initialized");
    this.loadView("home");
  },

  loadView(viewName) {
    this.currentView = viewName;
    console.log("Loading view:", viewName);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  FRIEND_APP.init();
});
