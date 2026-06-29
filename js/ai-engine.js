/*==========================================================
  ai-engine.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Artificial Intelligence Engine
  Version 1.0
==========================================================*/

const FRIENDAIEngine = (() => {

const STATE = {

    confidence: 98.6,

    learning: true,

    mode: "Executive",

    version: "1.0",

    lastEvaluation: new Date()

};

const INSIGHTS = [

{
    id:"AI-001",
    priority:100,
    category:"Food Safety",
    title:"Complete Temperature Validation",
    impact:"+3 Store Health"
},

{
    id:"AI-002",
    priority:95,
    category:"Labor",
    title:"Optimize Bakery Labor",
    impact:"+1.8% Labor"
},

{
    id:"AI-003",
    priority:90,
    category:"Shrink",
    title:"Review Deli Production",
    impact:"-$420 Shrink"
},

{
    id:"AI-004",
    priority:82,
    category:"Customer",
    title:"Verify Service Readiness",
    impact:"+Customer Satisfaction"
},

{
    id:"AI-005",
    priority:78,
    category:"Maintenance",
    title:"Review Maximo Work Orders",
    impact:"+Equipment Uptime"
}

];

/*==========================================================
  Sort Recommendations
==========================================================*/

function sortInsights(){

    INSIGHTS.sort((a,b)=>

        b.priority-a.priority

    );

}

/*==========================================================
  Highest Priority Recommendation
==========================================================*/

function getTopRecommendation(){

    sortInsights();

    return INSIGHTS[0];

}
/*==========================================================
  ai-engine.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Recommendation Queries
==========================================================*/

function getRecommendations(){

    sortInsights();

    return [...INSIGHTS];

}

function getRecommendation(id){

    return INSIGHTS.find(

        item => item.id === id

    );

}

function getRecommendationsByCategory(category){

    return INSIGHTS.filter(item =>

        item.category === category

    );

}

/*==========================================================
  Executive Summary
==========================================================*/

function executiveSummary(){

    const top = getTopRecommendation();

    return {

        confidence: STATE.confidence,

        mode: STATE.mode,

        recommendation: top.title,

        impact: top.impact,

        priority: top.priority,

        evaluated: STATE.lastEvaluation

    };

}

/*==========================================================
  Refresh Evaluation
==========================================================*/

function evaluate(){

    STATE.lastEvaluation = new Date();

    sortInsights();

    return executiveSummary();

}
