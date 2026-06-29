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
