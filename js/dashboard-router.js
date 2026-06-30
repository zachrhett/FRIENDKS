/*==========================================================
  dashboard-router.js
  FULL REPLACEMENT FILE
==========================================================*/

"use strict";

(function () {

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

    let activeRoute = "executive";

    function hideAllScreens() {

        document
            .querySelectorAll(".friend-screen")
            .forEach(screen => {

                screen.style.display = "none";

            });

    }

    function navigate(route) {

        if (!ROUTES[route]) {

            console.warn("[Router] Unknown route:", route);

            return false;

        }

        hideAllScreens();

        const target = document.getElementById(ROUTES[route]);

        if (!target) {

            console.error("[Router] Screen missing:", ROUTES[route]);

            return false;

        }

        target.style.display = "block";

        activeRoute = route;

        if (window.FRIENDStateStore) {

            window.FRIENDStateStore.set("activeScreen", route);

        }

        if (window.FRIENDEventBus) {

            window.FRIENDEventBus.emit("route:changed", {
                route,
                screenId: ROUTES[route]
            });

        }

        console.log("[Router] Navigated:", route);

        return true;

    }

    function refresh() {

        return navigate(activeRoute);

    }

    function getActiveRoute() {

        return activeRoute;

    }

    function getRoutes() {

        return { ...ROUTES };

    }

    function bindNavigation() {

        document
            .querySelectorAll("[data-route]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    navigate(button.dataset.route);

                });

            });

    }

    function init() {

        bindNavigation();

        navigate(activeRoute);

        console.log("[Router] Initialized");

    }

    window.FRIENDRouter = {

        init,
        navigate,
        refresh,
        getActiveRoute,
        getRoutes

    };

})();
