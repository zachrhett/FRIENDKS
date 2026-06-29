/*==========================================================
  storage.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Storage Engine
  Version 1.0
==========================================================*/

const FRIENDStorage = (() => {

const PREFIX = "FRIEND_";

function set(key, value){

    try{

        localStorage.setItem(
            PREFIX + key,
            JSON.stringify(value)
        );

        return true;

    } catch(e){

        return false;

    }

}

function get(key){

    try{

        const value =
            localStorage.getItem(PREFIX + key);

        return value ? JSON.parse(value) : null;

    } catch(e){

        return null;

    }

}

function remove(key){

    localStorage.removeItem(PREFIX + key);

}

function clear(){

    Object.keys(localStorage)
        .forEach(k => {

            if(k.startsWith(PREFIX)){

                localStorage.removeItem(k);

            }

        });

}

return {

    set,
    get,
    remove,
    clear

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDStorage =
    FRIENDStorage;

/*==========================================================
  End storage.js
==========================================================*/
