/*==========================================================
  executive-ai.js
  PART 1 OF N
==========================================================*/

"use strict";

const FRIENDExecutiveAI = (() => {

const AI = {

    assistant: "F.R.I.E.N.D.",

    version: "1.0",

    greeting:
        "Good morning. Executive systems are online.",

    insight:
        "Overall Store Health remains strong. Bakery labor optimization and Deli shrink represent today's highest operational opportunities.",

    recommendations: [

        {
            priority: 1,
            title: "Review Bakery Labor",
            impact: "High"
        },

        {
            priority: 2,
            title: "Verify Deli Production",
            impact: "Medium"
        },

        {
            priority: 3,
            title: "Complete Temperature Validation",
            impact: "Medium"
        },

        {
            priority: 4,
            title: "Review Maximo Work Orders",
            impact: "Low"
        }

    ]

};

function render(){

    return `

    <section class="executive-ai-screen">

        <header class="executive-ai-header">

            <h2>

                Executive AI

            </h2>

            <span class="ai-version">

                v${AI.version}

            </span>

        </header>

        <div class="executive-ai-message">

            <strong>${AI.greeting}</strong>

            <p>

                ${AI.insight}

            </p>

        </div>

        <div class="executive-ai-list">

            ${AI.recommendations.map(item => `

                <div
                    class="executive-ai-card"
                    data-ai-priority="${item.priority}">

                    <div class="executive-ai-number">

                        ${item.priority}

                    </div>

                    <div class="executive-ai-content">

                        <div class="executive-ai-title">

                            ${item.title}

                        </div>

                        <div class="executive-ai-impact">

                            ${item.impact} Impact

                        </div>

                    </div>

                </div>

            `).join("")}

        </div>

    </section>

    `;

}

return {

    AI,
    render

};

})();
/*==========================================================
  executive-ai.js
  PART 2 OF N
==========================================================*/

FRIENDExecutiveAI.mount = function (
    target = "#executiveAIScreen"
) {

    const root =
        typeof target === "string"
            ? document.querySelector(target)
            : target;

    if (!root) return;

    root.innerHTML = this.render();

    this.bindEvents(root);

};

/*==========================================================
  Event Binding
==========================================================*/

FRIENDExecutiveAI.bindEvents = function (
    root
) {

    root.querySelectorAll("[data-ai-priority]")
        .forEach(card => {

            card.addEventListener("click", () => {

                const priority =
                    Number(card.dataset.aiPriority);

                const recommendation =
                    this.AI.recommendations.find(
                        item => item.priority === priority
                    );

                if (recommendation) {

                    this.openRecommendation(recommendation);

                }

            });

        });

};

/*==========================================================
  Recommendation Detail
==========================================================*/

FRIENDExecutiveAI.openRecommendation = function (
    recommendation
) {

    const existing =
        document.querySelector(".executive-ai-overlay");

    if (existing) existing.remove();

    const overlay =
        document.createElement("div");

    overlay.className = "executive-ai-overlay";

    overlay.innerHTML = `

        <div class="executive-ai-modal">

            <div class="executive-ai-modal-header">

                <div>

                    <h2>${recommendation.title}</h2>

                    <p>AI Executive Recommendation</p>

                </div>

                <button class="executive-ai-close">
                    ×
                </button>

            </div>

            <div class="executive-ai-modal-body">

                <div class="executive-ai-priority">

                    Priority ${recommendation.priority}

                </div>

                <div class="executive-ai-impact-detail">

                    ${recommendation.impact} Business Impact

                </div>

                <div class="executive-ai-description">

                    F.R.I.E.N.D. has identified this recommendation
                    as a high-value opportunity to improve operational
                    execution, leadership visibility, and overall
                    Store Health performance.

                </div>

            </div>

            <div class="executive-ai-modal-footer">

                <button>
                    Create Mission
                </button>

                <button>
                    Close
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);

    overlay
        .querySelector(".executive-ai-close")
        .addEventListener("click", () => overlay.remove());

    overlay
        .querySelectorAll(".executive-ai-modal-footer button")[1]
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {

            overlay.remove();

        }

    });

};
