/*==========================================================
  permissions.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Permissions Engine
  Version 1.0
==========================================================*/

const FRIENDPermissions = (() => {

const ROLES = {

    EXECUTIVE: "EXECUTIVE",
    STORE_LEADER: "STORE_LEADER",
    DEPARTMENT_LEADER: "DEPARTMENT_LEADER",
    ASSOCIATE: "ASSOCIATE"

};

const PERMISSIONS = {

    EXECUTIVE: [
        "VIEW_ALL",
        "EDIT_ALL",
        "VIEW_ANALYTICS",
        "VIEW_FINANCIALS",
        "MANAGE_USERS"
    ],

    STORE_LEADER: [
        "VIEW_STORE",
        "EDIT_STORE",
        "VIEW_ANALYTICS",
        "MANAGE_DEPARTMENTS"
    ],

    DEPARTMENT_LEADER: [
        "VIEW_DEPARTMENT",
        "EDIT_DEPARTMENT",
        "VIEW_MISSIONS"
    ],

    ASSOCIATE: [
        "VIEW_ASSIGNED_MISSIONS",
        "COMPLETE_TASKS"
    ]

};

let currentRole = ROLES.ASSOCIATE;

function setRole(role){

    if(!ROLES[role]) return false;

    currentRole = role;

    return currentRole;

}

function getRole(){

    return currentRole;

}

return {

    ROLES,
    setRole,
    getRole

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDPermissions =
    FRIENDPermissions;

/*==========================================================
  End permissions.js
==========================================================*/
/*==========================================================
  permissions.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Permission Check
==========================================================*/

function hasPermission(permission){

    const perms =
        PERMISSIONS[currentRole] || [];

    return perms.includes(permission);

}

/*==========================================================
  Role Summary
==========================================================*/

function roleSummary(){

    return {

        role: currentRole,

        permissions:
            PERMISSIONS[currentRole] || [],

        totalPermissions:
            (PERMISSIONS[currentRole] || []).length

    };

}

/*==========================================================
  Upgrade Role
==========================================================*/

function upgradeRole(){

    if(currentRole === ROLES.ASSOCIATE){

        currentRole = ROLES.DEPARTMENT_LEADER;

    } else if(currentRole === ROLES.DEPARTMENT_LEADER){

        currentRole = ROLES.STORE_LEADER;

    } else if(currentRole === ROLES.STORE_LEADER){

        currentRole = ROLES.EXECUTIVE;

    }

    return currentRole;

}
/*==========================================================
  permissions.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    ROLES,

    setRole,
    getRole,

    hasPermission,
    roleSummary,
    upgradeRole

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDPermissions =
    FRIENDPermissions;

/*==========================================================
  End permissions.js
==========================================================*/
