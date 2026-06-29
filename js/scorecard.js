/*==========================================================
  scorecard.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D. v1.0
  Premium Store Scorecard Engine
==========================================================*/

const FRIENDScorecard = (() => {

const STORE = {

    id: 129,
    name: "King Soopers #129",

    district: 2,
    division: 620,

    storeHealth: 92,

    alerts: 7,

    maximo: 5,

    lastRefresh: new Date(),

    leaderFocus:
        "Improve Bakery labor efficiency while maintaining Food Safety compliance and reducing shrink in Deli.",

    guidedActions: [

        {
            priority:1,
            title:"Review Bakery Labor",
            owner:"Jamie",
            status:"Due Today",
            level:"high"
        },

        {
            priority:2,
            title:"Verify Deli Production",
            owner:"Joey",
            status:"In Progress",
            level:"medium"
        },

        {
            priority:3,
            title:"Complete Temperature Validation",
            owner:"Alex",
            status:"Ready",
            level:"low"
        }

    ]

};

/*==========================================================
  Executive Metrics
==========================================================*/

const METRICS = [

{
id:"sales",
title:"Sales",
value:"102.6%",
target:100,
status:"good",
trend:"+1.8%"
},

{
id:"labor",
title:"Labor",
value:"98.7%",
target:100,
status:"good",
trend:"+0.6%"
},

{
id:"shrink",
title:"Shrink",
value:"94.2%",
target:100,
status:"warning",
trend:"-0.9%"
},

{
id:"foodSafety",
title:"Food Safety",
value:"99.1%",
target:100,
status:"excellent",
trend:"+0.4%"
},

{
id:"replenishment",
title:"Replenishment",
value:"96.4%",
target:100,
status:"good",
trend:"+1.1%"
},

{
id:"inventory",
title:"Inventory",
value:"97.8%",
target:100,
status:"good",
trend:"+0.9%"
},

{
id:"production",
title:"Production",
value:"93.6%",
target:100,
status:"warning",
trend:"-1.2%"
},

{
id:"customer",
title:"Customer",
value:"95.8%",
target:100,
status:"good",
trend:"+1.0%"
}

];

/*==========================================================
  Department Health
==========================================================*/

const DEPARTMENTS = [

{
name:"Produce",
health:96,
status:"excellent"
},

{
name:"Meat",
health:95,
status:"excellent"
},

{
name:"Seafood",
health:93,
status:"good"
},

{
name:"Bakery",
health:88,
status:"warning"
},

{
name:"Deli",
health:87,
status:"warning"
},

{
name:"Dairy",
health:94,
status:"good"
},

{
name:"Grocery",
health:97,
status:"excellent"
},

{
name:"GM",
health:95,
status:"good"
},

{
name:"HBC",
health:96,
status:"excellent"
},

{
name:"Starbucks",
health:92,
status:"good"
},

{
name:"Murray's Cheese",
health:91,
status:"good"
}

];

/*==========================================================
  Color Palette
==========================================================*/

const COLORS = {

blue:"#0057B8",

darkBlue:"#083E78",

red:"#C8102E",

green:"#1E8E3E",

yellow:"#F2B705",

orange:"#FF8F00",

white:"#FFFFFF",

black:"#1B1B1B",

gray:"#F3F5F7",

border:"#D7DEE6"

};

/*==========================================================
  Utilities
==========================================================*/

function statusColor(status){

switch(status){

case "excellent":
return COLORS.green;

case "good":
return COLORS.blue;

case "warning":
return COLORS.yellow;

case "critical":
return COLORS.red;

default:
return COLORS.gray;

}

}

function healthColor(value){

if(value>=95) return COLORS.green;

if(value>=90) return COLORS.blue;

if(value>=85) return COLORS.yellow;

return COLORS.red;

}

function formatTime(date){

return date.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
});

}

function percent(v){

return `${v}%`;

}

/*==========================================================
  Public API
==========================================================*/

return {

STORE,

METRICS,

DEPARTMENTS,

COLORS,

statusColor,

healthColor,

formatTime,

percent

};

})();
