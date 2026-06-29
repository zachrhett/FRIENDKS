/*==========================================================
  dashboard-router.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Dashboard Router
  Version 1.0
==========================================================*/

const FRIENDRouter = (() => {

const ROUTES = {

    executive: "executiveDashboardScreen",
    analytics: "analyticsScreen",
    scorecard: "storeScorecardScreen",
    leader: "leaderFocusScreen",
    guided: "guidedActionsScreen",
    maximo: "maximoScreen",
    ai: "executiveAIScreen",
    notifications: "notificationsScreen"

};

function navigate(route){

    const screenId = ROUTES[route];

    if(!screenId) return false;

    const screens =
        document.querySelectorAll(".friend-screen");

    screens.forEach(s => s.style.display = "none");

    const active =
        document.querySelector("#" + screenId);

    if(active){

        active.style.display = "block";

    }

    return route;

}

function getRoutes(){

    return { ...ROUTES };

}

return {

    navigate,
    getRoutes

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDRouter =
    FRIENDRouter;

/*==========================================================
  End dashboard-router.js
==========================================================*/
