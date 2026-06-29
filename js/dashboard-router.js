/*==========================================================
  dashboard-router.js
  PART 1 OF N
==========================================================*/

"use strict";

const FRIENDRouter = (() => {

const ROUTES = {

    executive: "#executiveDashboardScreen",
    analytics: "#analyticsScreen",
    scorecard: "#storeScorecardScreen",
    leader: "#leaderFocusScreen",
    guided: "#guidedActionsScreen",
    maximo: "#maximoScreen",
    ai: "#executiveAIScreen"

};

let currentRoute = "executive";

/*==========================================================
  Hide All Screens
==========================================================*/

function hideAll(){

    Object.values(ROUTES).forEach(selector => {

        const page =
            document.querySelector(selector);

        if(page){

            page.style.display = "none";

        }

    });

}

/*==========================================================
  Navigate
==========================================================*/

function navigate(route){

    hideAll();

    currentRoute = route;

    const page =
        document.querySelector(
            ROUTES[route]
        );

    if(page){

        page.style.display = "block";

    }

    switch(route){

        case "executive":
            FRIENDExecutiveDashboard.mount(
                ROUTES.executive
            );
            break;

        case "analytics":
            FRIENDAnalytics.mount(
                ROUTES.analytics
            );
            break;

        case "scorecard":
            FRIENDScorecard.mount(
                ROUTES.scorecard
            );
            break;

        case "leader":
            FRIENDLeaderFocus.mount(
                ROUTES.leader
            );
            break;

        case "guided":
            FRIENDGuidedActions.mount(
                ROUTES.guided
            );
            break;

        case "maximo":
            FRIENDMaximo.mount(
                ROUTES.maximo
            );
            break;

        case "ai":
            FRIENDExecutiveAI.mount(
                ROUTES.ai
            );
            break;

    }

}

/*==========================================================
  Public API
==========================================================*/

return{

    ROUTES,
    navigate,

    current(){
        return currentRoute;
    }

};

})();
