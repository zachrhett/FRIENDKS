/* =========================================================
   F.R.I.E.N.D. SYSTEM CONTROLLER (STABLE BUILD v2)
   FIXES:
   - silent failures
   - missing dependency crashes
   - blank screen issues
   - unclear boot state
========================================================= */

(function () {

"use strict";

console.log("[F.R.I.E.N.D] system-controller.js LOADED");

let initialized = false;

/* =========================================================
   SAFE WAIT UTILITY
========================================================= */

function waitForDependencies(callback, retries = 50) {

    const check = () => {

        const ready =
            window.FRIENDStateStore &&
            window.FRIENDEventBus &&
            window.FRIENDScreenRenderer &&
            window.FRIENDRouter;

        if (ready) {
            callback();
        } else {
            if (retries <= 0) {
                console.error("[F.R.I.E.N.D] FAILED: dependencies not loaded");
                return;
            }

            retries--;
            setTimeout(check, 100);
        }
    };

    check();
}

/* =========================================================
   BOOT SEQUENCE
========================================================= */

function boot() {

    if (initialized) return;

    console.log("[F.R.I.E.N.D] BOOT START");

    waitForDependencies(() => {

        try {

            // 1. INIT STATE SYSTEM
            if (window.FRIENDStateStore?.init) {
                window.FRIENDStateStore.init();
            }

            // 2. INIT EVENT BUS
            if (window.FRIENDEventBus?.init) {
                window.FRIENDEventBus.init();
            }

            // 3. SCREEN RENDERER
            if (window.FRIENDScreenRenderer?.init) {
                window.FRIENDScreenRenderer.init();
            }

            // 4. ROUTER DEFAULT SCREEN
            if (window.FRIENDRouter?.navigate) {
                window.FRIENDRouter.navigate("executive");
            }

            // 5. SIGNAL READY STATE
            if (window.FRIENDEventBus?.emit) {
                window.FRIENDEventBus.emit("system:ready");
            }

            initialized = true;

            console.log("[F.R.I.E.N.D] BOOT COMPLETE");

        } catch (err) {
            console.error("[F.R.I.E.N.D] BOOT ERROR:", err);
        }

    });

}

/* =========================================================
   GLOBAL ACCESS
========================================================= */

window.FRIENDSystemController = {
    boot
};

/* =========================================================
   AUTO START (SAFE)
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    boot();
});

})();
