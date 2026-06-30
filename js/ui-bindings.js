/*==========================================================
  ui-bindings.js
  FULL REPLACEMENT FILE
==========================================================*/

"use strict";

(function () {

    function bindNavigationButtons() {

        document
            .querySelectorAll("[data-route]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const route = button.dataset.route;

                    if (window.FRIENDRouter) {

                        window.FRIENDRouter.navigate(route);

                    }

                    setActiveButton(route);

                });

            });

    }

    function setActiveButton(route) {

        document
            .querySelectorAll("[data-route]")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.route === route
                );

            });

    }

    function bindRouteEvents() {

        if (!window.FRIENDEventBus) return;

        window.FRIENDEventBus.on("route:changed", payload => {

            setActiveButton(payload.route);

        });

    }

    function bindStateEvents() {

        if (!window.FRIENDEventBus) return;

        window.FRIENDEventBus.on("state:updated", () => {

            if (window.FRIENDScreenRenderer) {

                window.FRIENDScreenRenderer.renderAll();

            }

        });

    }

    function init() {

        bindNavigationButtons();

        bindRouteEvents();

        bindStateEvents();

        console.log("[UI Bindings] Ready");

    }

    window.FRIENDUIBindings = {

        init,
        setActiveButton

    };

})();
