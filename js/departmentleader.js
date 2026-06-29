/*==========================================================
 F.R.I.E.N.D.
 Department Leader Dashboard
==========================================================*/

const DepartmentLeader = {

    render() {

        return `

<section class="view active" id="departmentLeader">

<div class="page-header">

<h1>Department Leader</h1>

<p>Welcome Jamie</p>

<p>Deli Department Dashboard</p>

</div>

<div class="dashboard-grid">

<div class="dashboard-card">

<h2>Production</h2>

<div class="metric">

<span>Completion</span>

<strong class="good">94%</strong>

</div>

<button onclick="DepartmentLeader.production()">

Open

</button>

</div>

<div class="dashboard-card">

<h2>Inventory</h2>

<div class="metric">

<span>Accuracy</span>

<strong class="good">96%</strong>

</div>

<button onclick="DepartmentLeader.inventory()">

Open

</button>

</div>

<div class="dashboard-card">

<h2>Replenishment</h2>

<div class="metric">

<span>Status</span>

<strong class="good">91%</strong>

</div>

<button onclick="DepartmentLeader.replenishment()">

Open

</button>

</div>

<div class="dashboard-card">

<h2>Food Safety</h2>

<div class="metric">

<span>Compliance</span>

<strong class="good">99%</strong>

</div>

<button onclick="DepartmentLeader.foodSafety()">

Open

</button>

</div>

<div class="dashboard-card">

<h2>Labor</h2>

<div class="metric">

<span>Efficiency</span>

<strong class="warn">101.6%</strong>

</div>

<button onclick="DepartmentLeader.labor()">

Open

</button>

</div>

<div class="dashboard-card">

<h2>Shrink</h2>

<div class="metric">

<span>Risk</span>

<strong class="warn">Medium</strong>

</div>

<button onclick="DepartmentLeader.shrink()">

Open

</button>

</div>

<div class="dashboard-card">

<h2>Ordering</h2>

<div class="metric">

<span>Accuracy</span>

<strong class="good">93%</strong>

</div>

<button onclick="DepartmentLeader.ordering()">

Open

</button>

</div>

<div class="dashboard-card">

<h2>Guided Missions</h2>

<ul>

<li>Review Deli Production</li>

<li>Verify Temperature Exceptions</li>

<li>Complete Markdown Review</li>

</ul>

</div>

</div>

<div class="footer-buttons">

<button onclick="APP.showHome()">

Home

</button>

<button onclick="APP.loadScorecard()">

Store Scorecard

</button>

</div>

</section>

`;

    },

    production(){

        Navigation.go("production");

    },

    inventory(){

        Navigation.go("inventory");

    },

    replenishment(){

        Navigation.go("replenishment");

    },

    foodSafety(){

        Navigation.go("foodSafety");

    },

    labor(){

        Navigation.go("labor");

    },

    shrink(){

        Navigation.go("shrink");

    },

    ordering(){

        Navigation.go("ordering");

    }

};

window.DepartmentLeader = DepartmentLeader;
