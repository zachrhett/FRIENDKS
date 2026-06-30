/*==========================================================
  system-controller.js
  FULL REPLACEMENT FILE
==========================================================*/

"use strict";

(function () {

    let initialized = false;

    function dependenciesReady() {

        return (
            window.FRIENDEventBus &&
            window.FRIENDStateStore &&
            window.FRIENDRouter &&
            window.FRIENDScreenRenderer &&
            window.FRIENDUIBindings
        );

    }

    function waitForDependencies(callback, attempts = 50) {

        if (dependenciesReady()) {

            callback();

            return;

        }

        if (attempts <= 0) {

            document.body.innerHTML = `
                <div style="
                    padding:40px;
                    font-family:Arial, sans-serif;
                    color:#111;
                ">
                    <h1>F.R.I.E.N.D. failed to start</h1>
                    <p>A required framework file did not load.</p>
                    <p>Check that these files exist:</p>
                    <ul>
                        <li>event-bus.js</li>
                        <li>state-store.js</li>
                        <li>dashboard-router.js</li>
                        <li>screen-renderer.js</li>
                        <li>ui-bindings.js</li>
                    </ul>
                </div>
            `;

            console.error("[System] Missing framework dependency");

            return;

        }

        setTimeout(() => waitForDependencies(callback, attempts - 1), 100);

    }

    function boot() {

        if (initialized) return;

        console.log("[System] Boot requested");

        waitForDependencies(() => {

            try {

                window.FRIENDStateStore.init();

                window.FRIENDScreenRenderer.init();

                window.FRIENDUIBindings.init();

                window.FRIENDRouter.init();

                window.FRIENDEventBus.emit("system:ready", {
                    timestamp: new Date().toISOString()
                });

                initialized = true;

                console.log("[System] Boot complete");

            } catch (error) {

                console.error("[System] Boot error:", error);

                document.body.innerHTML = `
                    <div style="
                        padding:40px;
                        font-family:Arial, sans-serif;
                        color:#111;
                    ">
                        <h1>F.R.I.E.N.D. boot error</h1>
                        <p>${error.message}</p>
                    </div>
                `;

            }

        });

    }

    function restart() {

        initialized = false;

        boot();

    }

    function status() {

        return {
            initialized,
            dependenciesReady: dependenciesReady(),
            state: window.FRIENDStateStore?.getState?.() || null,
            activeRoute: window.FRIENDRouter?.getActiveRoute?.() || null
        };

    }

    window.FRIENDSystemController = {

        boot,
        restart,
        status

    };

    document.addEventListener("DOMContentLoaded", boot);

    console.log("[System] system-controller.js loaded");

})();
