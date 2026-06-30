/*==========================================================
  js/screens/home.js
  F.R.I.E.N.D. Home Dashboard
==========================================================*/

"use strict";

window.FRIENDScreens = window.FRIENDScreens || {};

window.FRIENDScreens.home = function homeScreen(){

    return `
        <section class="home-screen">

            <div class="header">
                <div>
                    <h1>F.R.I.E.N.D.</h1>
                    <p>Store #129 • Division 620 • District 2</p>
                </div>

                <div class="health">
                    95%
                </div>
            </div>

            <section class="panel mission-panel">
                <div class="panel-title">
                    Priority Mission
                </div>

                <div class="action">
                    <span>
                        Support Bakery labor optimization while protecting Food Safety and Customer Experience.
                    </span>
                    <span class="badge high">
                        High
                    </span>
                </div>

                <div class="action">
                    <span>
                        Review Maximo work orders and alert exceptions before evening close.
                    </span>
                    <span class="badge medium">
                        Today
                    </span>
                </div>
            </section>

            <section class="grid">

                ${homeTile("Store Scorecard", "95%", "Store health", "scorecard", "up")}
                ${homeTile("Composite Scorecard", "Details", "Drill-down view", "composite", "up")}
                ${homeTile("Temperature", "96%", "Logs complete", "temperature", "up")}
                ${homeTile("Production", "84%", "Needs support", "production", "down")}
                ${homeTile("Inventory", "96%", "On-hand accuracy", "inventory", "up")}
                ${homeTile("Replenishment", "91%", "Improving", "replenishment", "up")}
                ${homeTile("Shrink", "Medium", "Deli waste focus", "shrink", "warn")}
                ${homeTile("Food Safety", "98%", "Compliant", "food-safety", "up")}
                ${homeTile("Labor", "+3.29%", "Watch labor cost", "labor", "down")}
                ${homeTile("Ordering", "93%", "Order accuracy", "ordering", "up")}
                ${homeTile("Safety", "145", "Days injury free", "safety", "up")}
                ${homeTile("Fresh Start", "14", "Assignments due", "fresh-start", "down")}
                ${homeTile("Maximo", "5", "Open work orders", "maximo", "down")}
                ${homeTile("Executive AI", "Ready", "Recommendations", "ai", "up")}
                ${homeTile("Voice", "On", "Assistant ready", "voice", "up")}

            </section>

        </section>
    `;
};

function homeTile(title, value, subtext, route, status){

    return `
        <button class="card home-tile" data-home-route="${route}">
            <div class="label">${title}</div>
            <div class="value">${value}</div>
            <div class="trend ${status}">${subtext}</div>
        </button>
    `;
}
