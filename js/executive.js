/*==========================================================
 F.R.I.E.N.D.
 Executive Dashboard
==========================================================*/

const Executive = {

    render() {

        return `

<section class="view active" id="executive">

<div class="page-header">

<h1>Executive Dashboard</h1>

<p>Division 620</p>

<p>Operational Intelligence</p>

</div>

<div class="dashboard-grid">

<div class="dashboard-card">

<h2>Division Health</h2>

<div class="metric">
<span>Overall</span>
<strong class="good">94%</strong>
</div>

<div class="metric">
<span>Stores</span>
<strong>155</strong>
</div>

<div class="metric">
<span>Associates</span>
<strong>22,000+</strong>
</div>

</div>

<div class="dashboard-card">

<h2>District Performance</h2>

<div class="metric">
<span>District 2</span>
<strong class="good">95%</strong>
</div>

<div class="metric">
<span>Food Safety</span>
<strong class="good">99%</strong>
</div>

<div class="metric">
<span>Labor</span>
<strong class="good">101.6%</strong>
</div>

</div>

<div class="dashboard-card">

<h2>Pilot Progress</h2>

<div class="metric">
<span>Pilot Stores</span>
<strong>3</strong>
</div>

<div class="metric">
<span>Regional Rollout</span>
<strong>Pending</strong>
</div>

<div class="metric">
<span>Division Rollout</span>
<strong>Ready</strong>
</div>

</div>

<div class="dashboard-card">

<h2>Financial Opportunity</h2>

<div class="metric">
<span>Investment</span>
<strong>$8.1M</strong>
</div>

<div class="metric">
<span>ROI</span>
<strong class="good">Positive</strong>
</div>

</div>

<div class="dashboard-card">

<h2>Executive Actions</h2>

<ul>

<li>Review Division KPI</li>

<li>Approve Pilot Expansion</li>

<li>Regional Rollout Planning</li>

<li>Corporate Partnership</li>

</ul>

</div>

<div class="dashboard-card">

<h2>Analytics</h2>

<div class="metric">
<span>Store Health</span>
<strong class="good">94%</strong>
</div>

<div class="metric">
<span>Alerts</span>
<strong class="bad">7</strong>
</div>

<div class="metric">
<span>Maximo</span>
<strong class="warn">5</strong>
</div>

</div>

</div>

<div class="footer-buttons">

<button onclick="APP.showHome()">
Home
</button>

<button onclick="APP.loadStoreLeader()">
Store Leader
</button>

</div>

</section>

`;

    }

};

window.Executive = Executive;
