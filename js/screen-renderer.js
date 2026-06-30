/*==========================================================
  screen-renderer.js
  FULL REPLACEMENT FILE
==========================================================*/

"use strict";

(function () {

    function state() {
        return window.FRIENDStateStore
            ? window.FRIENDStateStore.getState()
            : {};
    }

    function renderExecutive() {

        const s = state();

        const root = document.getElementById("executiveDashboardScreen");

        if (!root) return;

        root.innerHTML = `
            <div class="friend-page">

                <h1>Executive Dashboard</h1>

                <div class="card">
                    <h2>Store Health</h2>
                    <h1>${s.storeHealth}</h1>
                </div>

                <div class="card">
                    <h2>Open Alerts</h2>
                    <h1>${s.alerts}</h1>
                </div>

                <div class="card">
                    <h2>Maximo</h2>
                    <h1>${s.maximo}</h1>
                </div>

            </div>
        `;

    }

    function renderAnalytics() {

        const s = state();

        const root = document.getElementById("analyticsScreen");

        if (!root) return;

        root.innerHTML = `
            <div class="friend-page">

                <h1>Analytics</h1>

                <div class="card">
                    <p>Store Health: ${s.storeHealth}</p>
                    <p>Alerts: ${s.alerts}</p>
                    <p>Division: ${s.division}</p>
                    <p>District: ${s.district}</p>
                </div>

            </div>
        `;

    }

    function renderScorecard() {

        const s = state();

        const root = document.getElementById("storeScorecardScreen");

        if (!root) return;

        root.innerHTML = `
            <div class="friend-page">

                <h1>Store Scorecard</h1>

                <div class="card">

                    <p>Division ${s.division}</p>

                    <p>District ${s.district}</p>

                    <p>Store Health ${s.storeHealth}%</p>

                </div>

            </div>
        `;

    }

    function renderLeader() {

        const root = document.getElementById("leaderFocusScreen");

        if (!root) return;

        root.innerHTML = `
            <div class="friend-page">

                <h1>Leader Focus</h1>

                <div class="card">

                    Guided leadership missions will appear here.

                </div>

            </div>
        `;

    }

    function renderGuided() {

        const root = document.getElementById("guidedActionsScreen");

        if (!root) return;

        root.innerHTML = `
            <div class="friend-page">

                <h1>Guided Actions</h1>

                <div class="card">

                    Associate guided missions.

                </div>

            </div>
        `;

    }

    function renderMaximo() {

        const root = document.getElementById("maximoScreen");

        if (!root) return;

        root.innerHTML = `
            <div class="friend-page">

                <h1>Maximo</h1>

                <div class="card">

                    Work Orders: 5

                </div>

            </div>
        `;

    }

    function renderAI() {

        const root = document.getElementById("executiveAIScreen");

        if (!root) return;

        root.innerHTML = `
            <div class="friend-page">

                <h1>Executive AI</h1>

                <div class="card">

                    AI recommendations will populate here.

                </div>

            </div>
        `;

    }

    function renderNotifications() {

        const root = document.getElementById("notificationsScreen");

        if (!root) return;

        root.innerHTML = `
            <div class="friend-page">

                <h1>Notifications</h1>

                <div class="card">

                    No active notifications.

                </div>

            </div>
        `;

    }

    function renderAll() {

        renderExecutive();
        renderAnalytics();
        renderScorecard();
        renderLeader();
        renderGuided();
        renderMaximo();
        renderAI();
        renderNotifications();

    }

    function init() {

        renderAll();

        if (window.FRIENDEventBus) {

            window.FRIENDEventBus.on("state:updated", renderAll);

        }

        console.log("[Renderer] Ready");

    }

    window.FRIENDScreenRenderer = {

        init,
        renderAll

    };

})();
