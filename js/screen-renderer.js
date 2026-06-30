/*==========================================================
  screen-renderer.js
  FULL REPLACEMENT FILE
  Stable visual dashboard renderer
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
            <section class="executive-dashboard">

                <div class="friend-dashboard-header">
                    <div>
                        <h1>Executive Dashboard</h1>
                        <p>Division 620 • District 2</p>
                    </div>
                    <div class="store-health">
                        ${s.storeHealth ?? 95}%
                    </div>
                </div>

                <div class="kpi-grid">

                    <div class="kpi-card">
                        <div class="kpi-label">Store Health</div>
                        <div class="kpi-value">${s.storeHealth ?? 95}%</div>
                        <div class="kpi-trend up">Operationally stable</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">District</div>
                        <div class="kpi-value">${s.district ?? 2}</div>
                        <div class="kpi-trend up">King Soopers</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Division</div>
                        <div class="kpi-value">${s.division ?? 620}</div>
                        <div class="kpi-trend up">Active</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Stores</div>
                        <div class="kpi-value">155</div>
                        <div class="kpi-trend up">Division footprint</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Associates</div>
                        <div class="kpi-value">22,000+</div>
                        <div class="kpi-trend up">Connected workforce</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Alerts</div>
                        <div class="kpi-value">${s.alerts ?? 7}</div>
                        <div class="kpi-trend down">Needs review</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Maximo</div>
                        <div class="kpi-value">${s.maximo ?? 5}</div>
                        <div class="kpi-trend down">Open work orders</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Operational Readiness</div>
                        <div class="kpi-value">96%</div>
                        <div class="kpi-trend up">Ready</div>
                    </div>

                </div>

                <div class="priority-panel">
                    <div class="priority-title">Executive Priority</div>

                    <div class="priority-item">
                        <span>Support Bakery labor optimization while protecting Food Safety and Customer Experience.</span>
                        <span class="priority-badge high">High</span>
                    </div>

                    <div class="priority-item">
                        <span>Review alerts and Maximo work orders before evening close.</span>
                        <span class="priority-badge medium">Today</span>
                    </div>

                    <div class="priority-item">
                        <span>Confirm Store Scorecard readiness and department leader follow-up.</span>
                        <span class="priority-badge low">On Track</span>
                    </div>
                </div>

            </section>
        `;
    }

    function renderAnalytics() {
        const s = state();
        const root = document.getElementById("analyticsScreen");
        if (!root) return;

        root.innerHTML = `
            <section class="executive-dashboard">
                <div class="friend-dashboard-header">
                    <div>
                        <h1>Analytics</h1>
                        <p>Store performance and operational trends</p>
                    </div>
                </div>

                <div class="kpi-grid">
                    <div class="kpi-card">
                        <div class="kpi-label">Store Health</div>
                        <div class="kpi-value">${s.storeHealth ?? 95}%</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Alerts</div>
                        <div class="kpi-value">${s.alerts ?? 7}</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Division</div>
                        <div class="kpi-value">${s.division ?? 620}</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">District</div>
                        <div class="kpi-value">${s.district ?? 2}</div>
                    </div>
                </div>
            </section>
        `;
    }

    function renderScorecard() {
        const s = state();
        const root = document.getElementById("storeScorecardScreen");
        if (!root) return;

        root.innerHTML = `
            <section class="executive-dashboard">
                <div class="friend-dashboard-header">
                    <div>
                        <h1>Store Scorecard</h1>
                        <p>Store health, accountability, and operational readiness</p>
                    </div>
                    <div class="store-health">${s.storeHealth ?? 95}%</div>
                </div>

                <div class="kpi-grid">
                    <div class="kpi-card">
                        <div class="kpi-label">Division</div>
                        <div class="kpi-value">${s.division ?? 620}</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">District</div>
                        <div class="kpi-value">${s.district ?? 2}</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Maximo</div>
                        <div class="kpi-value">${s.maximo ?? 5}</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Alerts</div>
                        <div class="kpi-value">${s.alerts ?? 7}</div>
                    </div>
                </div>
            </section>
        `;
    }

    function renderLeader() {
        const root = document.getElementById("leaderFocusScreen");
        if (!root) return;

        root.innerHTML = `
            <section class="executive-dashboard">
                <div class="friend-dashboard-header">
                    <div>
                        <h1>Leader Focus</h1>
                        <p>Department leader missions and coaching priorities</p>
                    </div>
                </div>

                <div class="priority-panel">
                    <div class="priority-title">Leader Missions</div>

                    <div class="priority-item">
                        <span>Connect with Bakery Leader on labor recovery.</span>
                        <span class="priority-badge high">High</span>
                    </div>

                    <div class="priority-item">
                        <span>Review Deli production and waste exceptions.</span>
                        <span class="priority-badge medium">Today</span>
                    </div>

                    <div class="priority-item">
                        <span>Confirm Fresh Start completion.</span>
                        <span class="priority-badge low">Open</span>
                    </div>
                </div>
            </section>
        `;
    }

    function renderGuided() {
        const root = document.getElementById("guidedActionsScreen");
        if (!root) return;

        root.innerHTML = `
            <section class="executive-dashboard">
                <div class="friend-dashboard-header">
                    <div>
                        <h1>Guided Actions</h1>
                        <p>Associate mission flow</p>
                    </div>
                </div>

                <div class="priority-panel">
                    <div class="priority-title">Next Mission</div>
                    <div class="priority-item">
                        <span>Welcome Alex. Complete Fresh Start and move to next mission.</span>
                        <span class="priority-badge medium">Ready</span>
                    </div>
                </div>
            </section>
        `;
    }

    function renderMaximo() {
        const s = state();
        const root = document.getElementById("maximoScreen");
        if (!root) return;

        root.innerHTML = `
            <section class="executive-dashboard">
                <div class="friend-dashboard-header">
                    <div>
                        <h1>Maximo</h1>
                        <p>Maintenance and work order visibility</p>
                    </div>
                    <div class="store-health">${s.maximo ?? 5}</div>
                </div>

                <div class="kpi-grid">
                    <div class="kpi-card">
                        <div class="kpi-label">Open Work Orders</div>
                        <div class="kpi-value">${s.maximo ?? 5}</div>
                    </div>

                    <div class="kpi-card">
                        <div class="kpi-label">Alert Tile</div>
                        <div class="kpi-value">${s.alerts ?? 7}</div>
                    </div>
                </div>
            </section>
        `;
    }

    function renderAI() {
        const root = document.getElementById("executiveAIScreen");
        if (!root) return;

        root.innerHTML = `
            <section class="executive-dashboard">
                <div class="friend-dashboard-header">
                    <div>
                        <h1>Executive AI</h1>
                        <p>System recommendations and operational insight</p>
                    </div>
                </div>

                <div class="priority-panel">
                    <div class="priority-title">AI Recommendation</div>
                    <div class="priority-item">
                        <span>Focus on alert reduction, Maximo closure, and department leader follow-up.</span>
                        <span class="priority-badge high">Recommended</span>
                    </div>
                </div>
            </section>
        `;
    }

    function renderNotifications() {
        const s = state();
        const root = document.getElementById("notificationsScreen");
        if (!root) return;

        root.innerHTML = `
            <section class="executive-dashboard">
                <div class="friend-dashboard-header">
                    <div>
                        <h1>Alerts</h1>
                        <p>Operational exceptions requiring attention</p>
                    </div>
                    <div class="store-health">${s.alerts ?? 7}</div>
                </div>

                <div class="priority-panel">
                    <div class="priority-title">Active Alerts</div>

                    <div class="priority-item">
                        <span>Review Maximo work orders.</span>
                        <span class="priority-badge high">Open</span>
                    </div>

                    <div class="priority-item">
                        <span>Confirm Bakery labor recovery plan.</span>
                        <span class="priority-badge medium">Today</span>
                    </div>
                </div>
            </section>
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

        console.log("[Renderer] Visual renderer ready");
    }

    window.FRIENDScreenRenderer = {
        init,
        renderAll
    };

})();
