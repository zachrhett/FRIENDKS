/*==========================================================
  state-store.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Global State Store
  Phase 2 - Unified Data Layer
==========================================================*/

const FRIENDStateStore = (() => {

const STATE = {

    storeHealth: 92,

    district: 2,

    division: 620,

    alerts: 7,

    maximo: 5,

    lastUpdated: new Date()

};

const LISTENERS = {};

function getState(){

    return { ...STATE };

}

function setState(updates = {}){

    Object.assign(STATE, updates);

    STATE.lastUpdated = new Date();

    emit("state:updated", getState());

    return getState();

}

function subscribe(key, callback){

    if(!LISTENERS[key]){

        LISTENERS[key] = [];

    }

    LISTENERS[key].push(callback);

}

function emit(key, data){

    if(!LISTENERS[key]) return;

    LISTENERS[key].forEach(cb => {

        try{

            cb(data);

        } catch(err){

            console.error("StateStore error:", err);

        }

    });

}

return {

    getState,
    setState,
    subscribe

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDStateStore =
    FRIENDStateStore;

/*==========================================================
  End state-store.js
==========================================================*/
