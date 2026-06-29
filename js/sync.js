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
