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
