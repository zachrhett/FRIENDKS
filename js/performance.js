/*==========================================================
  performance.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Performance Engine
  Version 1.0
==========================================================*/

const FRIENDPerformance = (() => {

const SNAPSHOT = {

    fps: 60,

    memoryUsage: 42,

    cpuLoad: 18,

    renderTime: 8.4,

    networkLatency: 120,

    lastUpdated: new Date()

};

function measure(){

    return {

        fps: SNAPSHOT.fps,

        memoryUsage: SNAPSHOT.memoryUsage,

        cpuLoad: SNAPSHOT.cpuLoad,

        renderTime: SNAPSHOT.renderTime,

        networkLatency: SNAPSHOT.networkLatency,

        timestamp: new Date()

    };

}

function update(partial = {}){

    Object.assign(SNAPSHOT, partial);

    SNAPSHOT.lastUpdated = new Date();

    return measure();

}

return {

    measure,
    update

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDPerformance =
    FRIENDPerformance;

/*==========================================================
  End performance.js
==========================================================*/
