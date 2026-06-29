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
