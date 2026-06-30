/*==========================================================
  state-store.js
  FULL REPLACEMENT FILE
==========================================================*/

"use strict";

(function () {

    const DEFAULT_STATE = {

        storeHealth: 95,
        alerts: 7,
        maximo: 5,

        district: 2,
        division: 620,

        activeScreen: "executive",

        associate: "Alex",
        leader: "Jamie",
        storeLeader: "Joey",

        initialized: false

    };

    let state = structuredClone(DEFAULT_STATE);

    function getState() {
        return structuredClone(state);
    }

    function get(key) {
        return state[key];
    }

    function set(key, value) {

        state[key] = value;

        if (window.FRIENDEventBus) {

            window.FRIENDEventBus.emit("state:updated", {
                key,
                value,
                state: getState()
            });

        }

    }

    function update(values = {}) {

        Object.assign(state, values);

        if (window.FRIENDEventBus) {

            window.FRIENDEventBus.emit("state:updated", {
                state: getState()
            });

        }

    }

    function reset() {

        state = structuredClone(DEFAULT_STATE);

        if (window.FRIENDEventBus) {

            window.FRIENDEventBus.emit("state:updated", {
                state: getState()
            });

        }

    }

    function init() {

        state.initialized = true;

        console.log("[FRIEND] State Store Initialized");

        if (window.FRIENDEventBus) {

            window.FRIENDEventBus.emit("state:initialized", {
                state: getState()
            });

        }

    }

    function subscribe(eventName, callback) {

        if (!window.FRIENDEventBus) return;

        window.FRIENDEventBus.on(eventName, callback);

    }

    window.FRIENDStateStore = {

        init,

        getState,

        get,

        set,

        update,

        reset,

        subscribe

    };

})();
