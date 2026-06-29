/*==========================================================
  logger.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Logger Engine
  Version 1.0
==========================================================*/

const FRIENDLogger = (() => {

const LOGS = [];

const LEVELS = {

    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
    DEBUG: "DEBUG"

};

function log(level, message, context = {}){

    const entry = {

        id: crypto.randomUUID(),

        level,

        message,

        context,

        timestamp: new Date()

    };

    LOGS.push(entry);

    if(level === LEVELS.ERROR){

        console.error(entry);

    }

    return entry;

}

function info(message, context){

    return log(LEVELS.INFO, message, context);

}

function warn(message, context){

    return log(LEVELS.WARN, message, context);

}

function error(message, context){

    return log(LEVELS.ERROR, message, context);

}

function debug(message, context){

    return log(LEVELS.DEBUG, message, context);

}

function getLogs(){

    return [...LOGS];

}

return {

    LEVELS,

    info,
    warn,
    error,
    debug,
    getLogs

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDLogger =
    FRIENDLogger;

/*==========================================================
  End logger.js
==========================================================*/
/*==========================================================
  logger.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Filter Logs
==========================================================*/

function filterByLevel(level){

    return LOGS.filter(

        log => log.level === level

    );

}

/*==========================================================
  Clear Logs
==========================================================*/

function clear(){

    LOGS.length = 0;

    return true;

}

/*==========================================================
  Log Stats
==========================================================*/

function stats(){

    return {

        total: LOGS.length,

        info: LOGS.filter(l => l.level === LEVELS.INFO).length,

        warn: LOGS.filter(l => l.level === LEVELS.WARN).length,

        error: LOGS.filter(l => l.level === LEVELS.ERROR).length,

        debug: LOGS.filter(l => l.level === LEVELS.DEBUG).length

    };

}
/*==========================================================
  logger.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    LEVELS,

    info,
    warn,
    error,
    debug,
    getLogs,
    filterByLevel,
    clear,
    stats

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDLogger =
    FRIENDLogger;

/*==========================================================
  End logger.js
==========================================================*/
