/*==========================================================
  api.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  API Layer
  Version 1.0
==========================================================*/

const FRIENDAPI = (() => {

const CONFIG = {

    baseUrl: "/api",

    timeout: 5000,

    retries: 2

};

async function request(endpoint, options = {}){

    const controller = new AbortController();

    const timeout = setTimeout(() => controller.abort(), CONFIG.timeout);

    try{

        const response = await fetch(
            CONFIG.baseUrl + endpoint,
            {
                ...options,
                signal: controller.signal
            }
        );

        clearTimeout(timeout);

        if(!response.ok){

            throw new Error("Request failed");

        }

        return await response.json();

    } catch(err){

        clearTimeout(timeout);

        return {
            success:false,
            error:err.message
        };

    }

}

async function get(endpoint){

    return request(endpoint, { method:"GET" });

}

async function post(endpoint, data){

    return request(endpoint, {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(data)

    });

}

return {

    get,
    post

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDAPI =
    FRIENDAPI;

/*==========================================================
  End api.js
==========================================================*/
/*==========================================================
  api.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Retry Wrapper
==========================================================*/

async function withRetry(fn, retries = CONFIG.retries){

    try{

        return await fn();

    } catch(err){

        if(retries <= 0) throw err;

        return withRetry(fn, retries - 1);

    }

}

/*==========================================================
  Safe GET
==========================================================*/

async function safeGet(endpoint){

    return withRetry(() => get(endpoint));

}

/*==========================================================
  Safe POST
==========================================================*/

async function safePost(endpoint, data){

    return withRetry(() => post(endpoint, data));

}

/*==========================================================
  Health Check
==========================================================*/

async function health(){

    return request("/health");

}
/*==========================================================
  api.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    get,
    post,
    request,
    safeGet,
    safePost,
    health

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDAPI =
    FRIENDAPI;

/*==========================================================
  End api.js
==========================================================*/
