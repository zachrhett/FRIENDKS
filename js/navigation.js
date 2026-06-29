const FRIEND_NAVIGATION = {
  routes: {
    home: "Home",
    associate: "Associate Mode",
    freshStart: "Fresh Start",
    temperature: "Temperature Mission",
    training: "Training",
    departmentLeader: "Department Leader",
    storeLeader: "Store Leader",
    executive: "Executive Dashboard",
    maximo: "Maximo",
    alerts: "Alerts",
    scorecard: "Store Scorecard",
    composite: "Composite Scorecard"
  },

  goTo(routeName) {
    FRIEND_STATE.currentModule = routeName;

    if (routeName === "associate") {
      document.getElementById("app").innerHTML = FRIEND_ASSOCIATE.render();
      return;
    }

    if (routeName === "home") {
      location.reload();
      return;
    }

    document.getElementById("app").innerHTML = `
      <section class="screen">
        <h1>${this.routes[routeName] || "Coming Soon"}</h1>
        <p>This module is ready for construction.</p>
        <button onclick="FRIEND_NAVIGATION.goTo('home')">Home</button>
      </section>
    `;
  }
};
