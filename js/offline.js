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
/*==========================================================
  offline.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Queue Processing
==========================================================*/

function processQueue(){

    if(isOffline) return false;

    const processed = [...queue];

    queue = [];

    return {

        success: true,

        processedCount: processed.length,

        timestamp: new Date()

    };

}

/*==========================================================
  Clear Queue
==========================================================*/

function clearQueue(){

    queue = [];

    return true;

}

/*==========================================================
  Get Queue
==========================================================*/

function getQueue(){

    return [...queue];

}
/*==========================================================
  offline.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    init,
    status,
    addToQueue,
    processQueue,
    clearQueue,
    getQueue

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
