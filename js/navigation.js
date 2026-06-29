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

    switch (routeName) {
case "training":
    document.getElementById("app").innerHTML =
        FRIEND_TRAINING.render();
    break;
        case "home":
            location.reload();
            break;
        case "alerts":
    document.getElementById("app").innerHTML =
        FRIEND_ALERTS.render();
    break;
        case "maximo":
    document.getElementById("app").innerHTML =
        FRIEND_MAXIMO.render();
    break;
        case "scorecard":
    document.getElementById("app").innerHTML =
        FRIEND_SCORECARD.render();
    break;
        case "composite":
    document.getElementById("app").innerHTML =
        FRIEND_COMPOSITE.render();
    break;

        case "associate":
            document.getElementById("app").innerHTML =
                FRIEND_ASSOCIATE.render();
            break;

        case "freshStart":
            document.getElementById("app").innerHTML =
                FRIEND_FRESH_START.render();
            break;

        default:
            document.getElementById("app").innerHTML = `
                <section class="screen">
                    <h1>${this.routes[routeName] || "Coming Soon"}</h1>
                    <p>This module is under construction.</p>
                    <button onclick="FRIEND_NAVIGATION.goTo('home')">
                        Home
                    </button>
                </section>
            `;
    }
}
