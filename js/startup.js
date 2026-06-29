/*==========================================================
  startup.js
  PART 1 OF N
==========================================================*/

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    if (window.FRIENDApp) {

        FRIENDApp.initialize();

    }

    if (window.FRIENDRouter) {

        FRIENDRouter.navigate("executive");

    }

    if (window.FRIENDVoice) {

        FRIENDVoice.speak(
            "Welcome to F.R.I.E.N.D. Version 1.0. Executive Dashboard is ready."
        );

    }

    console.log("F.R.I.E.N.D. Version 1.0 Ready");

});
