/*==========================================================
 F.R.I.E.N.D.
 Store Leader Dashboard
==========================================================*/

const StoreLeader = {

    render() {

        return `

<section class="view active" id="storeLeader">

<div class="page-header">

<h1>Store Leader</h1>

<p>Welcome Joey</p>

<p>Store #129 Dashboard</p>

</div>

<div class="dashboard-grid">

<div class="dashboard-card">

<h2>Store Scorecard</h2>

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

<button onclick="StoreLeader.scorecard()">
Open
</button>

</div>

<div class="dashboard-card">

<h2>Composite Scorecard</h2>

<p>Detailed Operational Metrics</p>

<button onclick="StoreLeader.composite()">

Open

</button>

</div>

<div class="dashboard-card">

<h2>Department Health</h2>

<div class="metric">

<span>Deli</span>

<strong class="good">96%</strong>

</div>

<div class="metric">

<span>Meat</span>

<strong class="good">98%</strong>

</div>

<div class="metric">

<span>Bakery</span>

<strong class="good">95%</strong>

</div>

<div class="metric">

<span>Produce</span>

<strong class="warn">91%</strong>

</div>

</div>

<div class="dashboard-card">

<h2>Priority Missions</h2>

<ul>

<li>Review Labor Exceptions</li>

<li>Verify Food Safety</li>

<li>Complete Maximo PM</li>

</ul>

</div>

<div class="dashboard-card">

<h2>Store Metrics</h2>

<div class="metric">

<span>Labor</span>

<strong class="good">101.6%</strong>

</div>

<div class="metric">

<span>Inventory</span>

<strong class="good">96%</strong>

</div>

<div class="metric">

<span>Food Safety</span>

<strong class="good">99%</strong>

</div>

</div>

<div class="dashboard-card">

<h2>Leader Visibility</h2>

<p>Associate dashboards updated.</p>

<p>Department leaders notified.</p>

<p>Compliance 100%</p>

</div>

</div>

<div class="footer-buttons">

<button onclick="APP.showHome()">

Home

</button>

<button onclick="APP.loadExecutive()">

Executive

</button>

</div>

</section>

`;

    },

    scorecard(){

        APP.loadScorecard();

    },

    composite(){

        APP.loadComposite();

    }

};

window.StoreLeader = StoreLeader;
