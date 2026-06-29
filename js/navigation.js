/*==========================================================
 F.R.I.E.N.D.
 Navigation Engine
==========================================================*/

const Navigation = {

    routes: {

        home: "home",

        associate: "associate",
        freshStart: "freshStart",
        temperature: "temperature",
        training: "training",

        departmentLeader: "departmentLeader",
        production: "production",
        inventory: "inventory",
        replenishment: "replenishment",
        foodSafety: "foodSafety",
        labor: "labor",
        ordering: "ordering",
        shrink: "shrink",

        storeLeader: "storeLeader",
        scorecard: "scorecard",
        composite: "composite",
        analytics: "analytics",

        executive: "executive",
        district: "district",
        division: "division",
        roi: "roi",

        alerts: "alerts",
        maximo: "maximo"

    },

    go(route){

        if(!this.routes[route]){

            console.warn("Unknown Route:",route);
            return;

        }

        FRIEND.show(route);

    },

    home(){

        this.go("home");

    },

    back(){

        window.history.back();

    }

};

document.addEventListener("click",(event)=>{

    const button = event.target.closest("[data-view]");

    if(!button) return;

    event.preventDefault();

    Navigation.go(button.dataset.view);

});
