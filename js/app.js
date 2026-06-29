/*==========================================================
  F.R.I.E.N.D.
  Application Core
==========================================================*/

const APP = {

    initialized: false,

    currentUser: null,

    init() {

        console.log("================================");
        console.log("F.R.I.E.N.D. Initializing");
        console.log("Version:", CONFIG.app.version);
        console.log("================================");

        this.loadConfiguration();

        this.loadState();

        this.bindEvents();

        this.showHome();

        this.initialized = true;

        console.log("Initialization Complete");

    },

    loadConfiguration() {

        this.config = CONFIG;

        console.log("Configuration Loaded");

    },

    loadState() {

        this.state = State;

        this.currentUser = State.user;

        console.log("State Loaded");

    },

    bindEvents() {

        window.addEventListener("online", () => {

            State.app.online = true;

            console.log("Application Online");

        });

        window.addEventListener("offline", () => {

            State.app.online = false;

            console.log("Application Offline");

        });

    showHome() {

    document.getElementById("content").innerHTML =
        Home.render();

},


    },

  loadDepartmentLeader() {

    document.getElementById("content").innerHTML =
        DepartmentLeader.render();

},  
  loadDepartmentLeader() {

        Navigation.go("departmentLeader");

    },

    loadStoreLeader() {

    document.getElementById("content").innerHTML =
        StoreLeader.render();

},

    loadExecutive() {

    document.getElementById("content").innerHTML =
        Executive.render();

},
    },

    loadScorecard() {

        Navigation.go("scorecard");

    },

    loadComposite() {

        Navigation.go("composite");

    },

    loadAlerts() {

        Navigation.go("alerts");

    },

    loadMaximo() {

        Navigation.go("maximo");

    },

    refreshDashboard() {

        console.log("Refreshing Dashboard");

    },

    logout() {

        console.log("User Logged Out");

        Navigation.go("home");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    APP.init();

});

window.APP = APP;
