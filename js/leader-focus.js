/*==========================================================
  leader-focus.js
  PART 2 OF N
==========================================================*/

FRIENDLeaderFocus.mount = function (
    target = "#leaderFocusScreen"
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

FRIENDLeaderFocus.bindEvents = function (
    root
) {

    const actions =
        root.querySelectorAll(".leader-action");

    actions.forEach((card, index) => {

        card.addEventListener("click", () => {

            this.openAction(
                this.STATE.actions[index]
            );

        });

    });

};

/*==========================================================
  Action Detail
==========================================================*/

FRIENDLeaderFocus.openAction = function (
    action
) {

    const existing =
        document.querySelector(".leader-overlay");

    if (existing) existing.remove();

    const overlay =
        document.createElement("div");

    overlay.className = "leader-overlay";

    overlay.innerHTML = `

        <div class="leader-modal">

            <div class="leader-modal-header">

                <h2>${action.title}</h2>

                <button class="leader-close">
                    ×
                </button>

            </div>

            <div class="leader-modal-body">

                <div class="leader-detail-row">

                    <strong>Owner</strong>

                    <span>${action.owner}</span>

                </div>

                <div class="leader-detail-row">

                    <strong>Due</strong>

                    <span>${action.due}</span>

                </div>

                <div class="leader-detail-row">

                    <strong>Status</strong>

                    <span>${action.status}</span>

                </div>

                <div class="leader-notes">

                    Guided leadership coaching recommends
                    completing this task today to maintain
                    Store Health and operational compliance.

                </div>

            </div>

            <div class="leader-modal-footer">

                <button>
                    Assign
                </button>

                <button>
                    Complete
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);

    overlay
        .querySelector(".leader-close")
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", e => {

        if (e.target === overlay) {

            overlay.remove();

        }

    });

};
