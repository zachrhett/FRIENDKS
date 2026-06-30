/*==========================================================
  screen-renderer.js
  FULL REPLACEMENT FILE
  Premium Executive Dashboard Restore
==========================================================*/

"use strict";

(function () {

    function state() {
        return window.FRIENDStateStore
            ? window.FRIENDStateStore.getState()
            : {};
    }

    function card(label, value, subtext, status = "up") {
        return `
            <div class="kpi-card">
                <div class="kpi-label">${label}</div>
                <div class="kpi-value">${value}</div>
                <div class="kpi-trend ${status}">${subtext}</div>
            </div>
        `;
    }

    function priority(text, badge, level = "medium") {
        return `
            <div class="priority-item">
                <span>${text}</span>
                <span class="priority-badge ${level}">${badge}</span>
            </div>
        `;
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
                        <p>Division 620 • District 2 • Store #129 Operational View</p>
                    </div>
                    <div class="store-health">
                        ${s.storeHealth ?? 95}%
                    </div>
                </div>

                <div class="kpi-grid">
                    ${card("Store Health", `${s.storeHealth ?? 95}%`, "Operationally stable", "up")}
                    ${card("District", `${s.district ?? 2}`, "King Soopers", "up")}
                    ${card("Division", `${s.division ?? 620}`, "Active", "up")}
                    ${card("Stores", "155", "Division footprint", "up")}
                    ${card("Associates", "22,000+", "Connected workforce", "up")}
                    ${card("Alerts", `${s.alerts ?? 7}`, "Needs review", "down")}
                    ${card("Maximo", `${s.maximo ?? 5}`, "Open work orders", "down")}
                    ${card("Operational Readiness", "96%", "Ready", "up")}
                </div>

                <div class="priority-panel">
                    <div class="priority-title">Executive Priority</div>
                    ${priority(
                        "Support Bakery labor optimization while protecting Food Safety and Customer Experience.",
                        "High",
                        "high"
                    )}
                    ${priority(
                        "Review active alerts and Maximo work orders before evening close.",
                        "Today",
                        "medium"
                    )}
                    ${priority(
                        "Confirm Store Scorecard readiness and department leader follow-up.",
                        "On Track",
                        "low"
                    )}
                </div>

                <div class="priority-panel">
                    <div class="priority-title">Division Focus</div>
                    ${priority("Store #129 remains operationally stable with strong readiness indicators.", "Stable", "low")}
                    ${priority("Alert load remains manageable but should be reviewed before close.", "Watch", "medium")}
                    ${priority("Maximo work orders require leader confirmation.", "Action", "high")}
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
                        <p>Performance trends and operational insights</p>
                    </div>
                    <div class="store-health">${s.storeHealth ?? 95}%</div>
                </div>

                <div class="kpi-grid">
                    ${card("Store Health", `${s.storeHealth ?? 95}%`, "Stable", "up")}
                    ${card("Alerts", `${s.alerts ?? 7}`, "Needs review", "down")}
                    ${card("Operational Readiness", "96%", "Ready", "up")}
                    ${card("Labor Focus", "Bakery", "Optimization needed", "down")}
                </div>

                <div class="priority-panel">
                    <div class="priority-title">Analytics Summary</div>
                    ${priority("Store health remains strong while labor optimization remains the primary opportunity.", "Insight", "medium")}
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
                    ${card("Store Health", `${s.storeHealth ?? 95}%`, "Healthy", "up")}
                    ${card("District", `${s.district ?? 2}`, "Confirmed", "up")}
                    ${card("Division", `${s.division ?? 620}`, "Confirmed", "up")}
                    ${card("Alerts", `${s.alerts ?? 7}`, "Open", "down")}
                    ${card("Maximo", `${s.maximo ?? 5}`, "Open", "down")}
                    ${card("Readiness", "96%", "Ready", "up")}
                </div>

                <div class="priority-panel">
                    <div class="priority-title">Scorecard Guidance</div>
                    ${priority("Confirm department leader follow-up on alerts and Maximo.", "Action", "high")}
                    ${priority("Maintain operational standards across Food Safety, Labor, and Shrink.", "Monitor", "medium")}
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
                    ${priority("Connect with Bakery Leader on labor recovery.", "High", "high")}
                    ${priority("Review Deli production and waste exceptions.", "Today", "medium")}
                    ${priority("Confirm Fresh Start completion.", "Open", "low")}
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
                    ${priority("Welcome Alex. Complete Fresh Start and move to next mission.", "Ready", "medium")}
                    ${priority("Temperature mission prepared for validation.", "Queued", "low")}
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
                    ${card("Open Work Orders", `${s.maximo ?? 5}`, "Needs review", "down")}
                    ${card("Alert Tile", `${s.alerts ?? 7}`, "Open", "down")}
                    ${card("Priority", "Maintenance", "Leader follow-up", "medium")}
                    ${card("Status", "Active", "Operational", "up")}
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
                    ${priority("Focus on alert reduction, Maximo closure, and department leader follow-up.", "Recommended", "high")}
                    ${priority("Bakery labor optimization is the strongest immediate opportunity.", "Insight", "medium")}
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
                    ${priority("Review Maximo work orders.", "Open", "high")}
                    ${priority("Confirm Bakery labor recovery plan.", "Today", "medium")}
                    ${priority("Validate scorecard readiness before close.", "Open", "low")}
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

        console.log("[Renderer] Premium dashboard renderer ready");
    }

    window.FRIENDScreenRenderer = {
        init,
        renderAll
    };

})();
