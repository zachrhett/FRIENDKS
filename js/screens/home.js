import { appData } from "../../data/app-data.js";

export function render() {

const m = appData.metrics.executive;

return `

<section class="home-screen">

<header class="home-hero">

<div class="brand-row">

<img
class="ks-logo"
src="./images/king-soopers-logo.png"
alt="King Soopers">

<div>

<h1>F.R.I.E.N.D.</h1>

<p>

Store ${appData.store.number}

•

District ${appData.store.district}

•

Division ${appData.store.division}

</p>

</div>

</div>

</header>

<div class="dashboard-grid">

<button class="module-card" data-screen="executive">

Executive

<div>${m.storeHealth}</div>

</button>

<button class="module-card" data-screen="analytics">

Analytics

<div>Live</div>

</button>

<button class="module-card" data-screen="scorecard">

Store Scorecard

<div>94.2</div>

</button>

<button class="module-card" data-screen="leader">

Leader

<div>91%</div>

</button>

<button class="module-card" data-screen="mission">

Guided Mission

<div>Alex</div>

</button>

<button class="module-card" data-screen="maximo">

Maximo

<div>5</div>

</button>

<button class="module-card" data-screen="ai">

AI Assistant

<div>Ready</div>

</button>

<button class="module-card" data-screen="alerts">

Alerts

<div>7</div>

</button>

</div>

</section>

`;

}
