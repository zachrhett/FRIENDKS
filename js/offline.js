/*==========================================================
  offline.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Offline Engine
  Version 1.0
==========================================================*/

const FRIENDOffline = (() => {

let isOffline = !navigator.onLine;

let queue = [];

function init(){

    window.addEventListener("online", () => {

        isOffline = false;

    });

    window.addEventListener("offline", () => {

        isOffline = true;

    });

}

function status(){

    return {

        online: !isOffline,

        offline: isOffline,

        queuedActions: queue.length

    };

}

function addToQueue(action){

    queue.push({

        ...action,

        timestamp: new Date()

    });

}

return {

    init,
    status,
    addToQueue

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDOffline =
    FRIENDOffline;

/*==========================================================
  End offline.js
==========================================================*/
