/*==========================================================
  recommendation-engine.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Recommendation Engine
  Version 1.0
==========================================================*/

const FRIENDRecommendationEngine = (() => {

const RULES = [

{
    id:"REC-001",
    trigger:"Food Safety Below 95%",
    priority:100,
    recommendation:"Assign Immediate Temperature Validation",
    department:"Food Safety"
},

{
    id:"REC-002",
    trigger:"Bakery Labor Over Goal",
    priority:95,
    recommendation:"Optimize Schedule And Production",
    department:"Bakery"
},

{
    id:"REC-003",
    trigger:"Deli Shrink Above Goal",
    priority:90,
    recommendation:"Review Production Forecast",
    department:"Deli"
},

{
    id:"REC-004",
    trigger:"Open Maximo Work Orders",
    priority:82,
    recommendation:"Assign Maintenance Mission",
    department:"Maintenance"
},

{
    id:"REC-005",
    trigger:"Customer Readiness Opportunity",
    priority:75,
    recommendation:"Deploy Leader Store Walk",
    department:"Store"
}

];

/*==========================================================
  Sort Rules
==========================================================*/

function sortRules(){

    RULES.sort((a,b)=>

        b.priority-a.priority

    );

}

/*==========================================================
  Highest Recommendation
==========================================================*/

function getHighest(){

    sortRules();

    return RULES[0];

}
/*==========================================================
  recommendation-engine.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Recommendation Queries
==========================================================*/

function getAll(){

    sortRules();

    return [...RULES];

}

function getById(id){

    return RULES.find(rule =>

        rule.id === id

    );

}

function getByDepartment(department){

    return RULES.filter(rule =>

        rule.department === department

    );

}

/*==========================================================
  Recommendation Evaluation
==========================================================*/

function evaluate(storeData = {}){

    sortRules();

    return {

        timestamp: new Date(),

        recommendation: RULES[0],

        totalRecommendations: RULES.length,

        storeHealth:
            storeData.storeHealth ?? 92,

        alerts:
            storeData.alerts ?? 7,

        maximo:
            storeData.maximo ?? 5

    };

}
/*==========================================================
  recommendation-engine.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    getHighest,
    getAll,
    getById,
    getByDepartment,
    evaluate

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDRecommendationEngine =
    FRIENDRecommendationEngine;

/*==========================================================
  End recommendation-engine.js
==========================================================*/
