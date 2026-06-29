/*==========================================================
  sync.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Sync Engine
  Version 1.0
==========================================================*/

const FRIENDSync = (() => {

let queue = [];

let syncing = false;

let lastSync = null;

function add(item){

    queue.push({

        ...item,

        timestamp: new Date()

    });

}

function getQueue(){

    return [...queue];

}

function clearQueue(){

    queue = [];

}

function status(){

    return {

        syncing,

        queued: queue.length,

        lastSync

    };

}

return {

    add,
    getQueue,
    clearQueue,
    status

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSync =
    FRIENDSync;

/*==========================================================
  End sync.js
==========================================================*/
/*==========================================================
  sync.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Sync Processor
==========================================================*/

function process(){

    if(syncing) return status();

    syncing = true;

    return new Promise(resolve => {

        setTimeout(() => {

            lastSync = new Date();

            syncing = false;

            clearQueue();

            resolve(status());

        }, 1200);

    });

}

/*==========================================================
  Force Sync
==========================================================*/

function forceSync(){

    clearQueue();

    lastSync = new Date();

    return status();

}

/*==========================================================
  Sync Health
==========================================================*/

function health(){

    return {

        healthy: queue.length < 10,

        risk: queue.length > 25 ? "High" : "Low",

        queued: queue.length

    };

}
