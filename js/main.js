/* ==========================================================
   F.R.I.E.N.D.
   Main Application Loader
========================================================== */

window.FRIEND = {
    version: "1.0.0",
    currentView: "home",

    init() {
        console.log("F.R.I.E.N.D. Starting...");
        this.bindNavigation();
        this.show("home");
    },

    bindNavigation() {

        document.querySelectorAll("[data-view]").forEach(button => {

            button.addEventListener("click", () => {

                const target = button.dataset.view;

                this.show(target);

            });

        });

    },

    show(view) {

        this.currentView = view;

        document.querySelectorAll(".view").forEach(screen => {

            screen.classList.remove("active");

        });

        const selected = document.getElementById(view);

        if(selected){

            selected.classList.add("active");

        }

        console.log("Current View:",view);

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    FRIEND.init();

});
