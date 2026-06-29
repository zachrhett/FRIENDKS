const FRIEND_NAVIGATION = {
  routes: {
    home: "Home",
    associate: "Associate Mode",
    departmentLeader: "Department Leader",
    storeLeader: "Store Leader",
    executive: "Executive Dashboard",
    maximo: "Maximo",
    alerts: "Alerts",
    scorecard: "Store Scorecard",
    composite: "Composite Scorecard"
  },

  goTo(routeName) {
    if (!this.routes[routeName]) {
      console.warn("Unknown route:", routeName);
      return;
    }

    FRIEND_STATE.currentModule = routeName;
    FRIEND_APP.loadView(routeName);
  }
};
