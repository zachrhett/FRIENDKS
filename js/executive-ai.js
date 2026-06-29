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
