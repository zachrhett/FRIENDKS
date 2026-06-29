/*==========================================================
  search.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Search Engine
  Version 1.0
==========================================================*/

const FRIENDSearch = (() => {

const INDEX = [

"store health",

"district 2",

"division 620",

"alerts",

"maximo",

"bakery labor",

"deli shrink",

"temperature validation",

"guided actions",

"executive dashboard",

"analytics",

"inventory",

"replenishment",

"ordering",

"safety",

"fresh start",

"food safety"

];

let lastQuery = "";

function normalize(query){

    return query
        .toLowerCase()
        .trim();

}

function search(query){

    lastQuery = query;

    const q = normalize(query);

    return INDEX.filter(item =>

        item.includes(q)

    );

}

function getLastQuery(){

    return lastQuery;

}

return {

    search,
    getLastQuery

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSearch =
    FRIENDSearch;

/*==========================================================
  End search.js
==========================================================*/
/*==========================================================
  search.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Advanced Search
==========================================================*/

function advancedSearch(query){

    const q = normalize(query);

    return INDEX.map(item => {

        let score = 0;

        if(item.includes(q)) score += 50;

        if(q.includes(item)) score += 25;

        if(item.split(" ").some(w => q.includes(w))) score += 10;

        return { item, score };

    })

    .filter(r => r.score > 0)

    .sort((a,b) => b.score - a.score);

}

/*==========================================================
  Suggestions
==========================================================*/

function suggestions(){

    return INDEX.slice(0,8);

}

/*==========================================================
  Refresh Index
==========================================================*/

function refreshIndex(){

    return {

        total: INDEX.length,

        lastQuery

    };

}
/*==========================================================
  search.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    search,
    advancedSearch,
    suggestions,
    getLastQuery,
    refreshIndex

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSearch =
    FRIENDSearch;

/*==========================================================
  End search.js
==========================================================*/
