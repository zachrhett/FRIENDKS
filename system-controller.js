/*==========================================================
  system-controller.js
  SAFE FINAL VERSION
==========================================================*/

"use strict";

(function () {

    let initialized = false;

    function boot() {

        if (initialized) return;

        console.log("[System] Boot starting");

        try {

            if (window.FRIENDStateStore?.init) {
                window.FRIENDStateStore.init();
            }

            if (window.FRIENDScreenRenderer?.init) {
                window.FRIENDScreenRenderer.init();
            }

            if (window.FRIENDUIBindings?.init) {
                window.FRIENDUIBindings.init();
            }

            if (window.FRIENDRouter?.init) {
                window.FRIENDRouter.init();
            } else if (window.FRIENDRouter?.navigate) {
                window.FRIENDRouter.navigate("executive");
            }

            if (window.FRIENDEventBus?.emit) {
                window.FRIENDEventBus.emit("system:ready", {
                    timestamp: new Date().toISOString()
                });
            }

            initialized = true;

            console.log("[System] Boot complete");

        } catch (error) {

            console.error("[System] Boot error:", error);

        }

    }

    function restart() {
        initialized = false;
        boot();
    }

    function status() {
        return {
            initialized,
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

})();
