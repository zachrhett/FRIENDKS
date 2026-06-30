/*==========================================================
  data-model.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Data Model Layer
  Phase 2 - Unified Schema
==========================================================*/

const FRIENDDataModel = (() => {

const SCHEMA = {

    store: {

        health: "number",
        district: "number",
        division: "number",
        alerts: "number",
        maximo: "number"

    },

    mission: {

        id: "string",
        title: "string",
        priority: "number",
        status: "string",
        department: "string"

    },

    alert: {

        id: "string",
        type: "string",
        title: "string",
        message: "string",
        owner: "string"

    }

};

function validate(schemaKey, data){

    const schema = SCHEMA[schemaKey];

    if(!schema) return false;

    return Object.keys(schema).every(key => {

        return data[key] !== undefined;

    });

}

function getSchema(){

    return JSON.parse(JSON.stringify(SCHEMA));

}

return {

    validate,
    getSchema

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDDataModel =
    FRIENDDataModel;

/*==========================================================
  End data-model.js
==========================================================*/
/*==========================================================
  data-model.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Type Coercion Layer
==========================================================*/

function normalizeStore(data = {}){

    return {

        health: Number(data.health ?? 0),
        district: Number(data.district ?? 0),
        division: Number(data.division ?? 0),
        alerts: Number(data.alerts ?? 0),
        maximo: Number(data.maximo ?? 0)

    };

}

/*==========================================================
  Mission Normalizer
==========================================================*/

function normalizeMission(data = {}){

    return {

        id: String(data.id ?? ""),
        title: String(data.title ?? ""),
        priority: Number(data.priority ?? 0),
        status: String(data.status ?? ""),
        department: String(data.department ?? "")

    };

}

/*==========================================================
  Alert Normalizer
==========================================================*/

function normalizeAlert(data = {}){

    return {

        id: String(data.id ?? ""),
        type: String(data.type ?? ""),
        title: String(data.title ?? ""),
        message: String(data.message ?? ""),
        owner: String(data.owner ?? "")

    };

}
/*==========================================================
  data-model.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    validate,
    getSchema,

    normalizeStore,
    normalizeMission,
    normalizeAlert

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDDataModel =
    FRIENDDataModel;

/*==========================================================
  End data-model.js
==========================================================*/
