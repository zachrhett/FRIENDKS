/*==========================================================
  settings.js
  PART 2 OF N
==========================================================*/

/*==========================================================
  Feature Toggles
==========================================================*/

function enableFeature(feature){

    state[feature] = true;

    return state;

}

function disableFeature(feature){

    state[feature] = false;

    return state;

}

/*==========================================================
  System Profile
==========================================================*/

function systemProfile(){

    return {

        theme: state.theme,

        features: {

            notifications: state.notifications,

            voiceEnabled: state.voiceEnabled,

            autoSync: state.autoSync,

            offlineMode: state.offlineMode

        },

        refreshRate: state.refreshRate

    };

}

/*==========================================================
  Update Settings Bulk
==========================================================*/

function updateSettings(updates = {}){

    state = {

        ...state,

        ...updates

    };

    return getAll();

}
/*==========================================================
  settings.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    getAll,
    set,
    reset,
    enableFeature,
    disableFeature,
    systemProfile,
    updateSettings

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDSettings =
    FRIENDSettings;

/*==========================================================
  End settings.js
==========================================================*/
