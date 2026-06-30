/*==========================================================
  recommendation-ui.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Recommendation UI Layer
  Phase 2 - Executive Intelligence Display
==========================================================*/

const FRIENDRecommendationUI = (() => {

function render(){

    const ai =
        FRIENDAIOrchestrator?.run?.();

    const rec =
        FRIENDRecommendationEngine?.evaluate?.() || {};

    return `

        <section class="recommendation-ui">

            <header>

                <h2>AI Recommendations</h2>

                <div class="ai-confidence">
                    Confidence: ${ai?.evaluation?.confidence ?? 0}%
                </div>

            </header>

            <div class="rec-summary">

                <div class="rec-card">

                    <div class="label">Suggested Action</div>

                    <div class="value">
                        ${rec?.suggestedAction ?? "N/A"}
                    </div>

                </div>

                <div class="rec-card">

                    <div class="label">High Priority Load</div>

                    <div class="value">
                        ${rec?.highPriority ?? 0}
                    </div>

                </div>

            </div>

        </section>

    `;

}

return {

    render

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDRecommendationUI =
    FRIENDRecommendationUI;

/*==========================================================
  End recommendation-ui.js
==========================================================*/
/*==========================================================
  recommendation-ui.js
  PART 1 OF N
==========================================================*/

"use strict";

/*==========================================================
  F.R.I.E.N.D.
  Recommendation UI Layer
  Phase 2 - Executive Intelligence Display
==========================================================*/

const FRIENDRecommendationUI = (() => {

function render(){

    const ai =
        FRIENDAIOrchestrator?.run?.();

    const rec =
        FRIENDRecommendationEngine?.evaluate?.() || {};

    return `

        <section class="recommendation-ui">

            <header>

                <h2>AI Recommendations</h2>

                <div class="ai-confidence">
                    Confidence: ${ai?.evaluation?.confidence ?? 0}%
                </div>

            </header>

            <div class="rec-summary">

                <div class="rec-card">

                    <div class="label">Suggested Action</div>

                    <div class="value">
                        ${rec?.suggestedAction ?? "N/A"}
                    </div>

                </div>

                <div class="rec-card">

                    <div class="label">High Priority Load</div>

                    <div class="value">
                        ${rec?.highPriority ?? 0}
                    </div>

                </div>

            </div>

        </section>

    `;

}

return {

    render

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDRecommendationUI =
    FRIENDRecommendationUI;

/*==========================================================
  End recommendation-ui.js
==========================================================*/
/*==========================================================
  recommendation-ui.js
  PART 3 OF N
==========================================================*/

/*==========================================================
  Public API
==========================================================*/

return {

    render,
    mount,
    bindEvents,
    autoRefresh

};

})();

/*==========================================================
  Global Access
==========================================================*/

window.FRIENDRecommendationUI =
    FRIENDRecommendationUI;

/*==========================================================
  End recommendation-ui.js
==========================================================*/
