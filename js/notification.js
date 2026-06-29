/*==========================================================
  notifications.js
  PART 2 OF N
==========================================================*/

FRIENDNotifications.mount = function (
    target = "#notificationsScreen"
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

FRIENDNotifications.bindEvents = function (
    root
) {

    root.querySelectorAll("[data-notification-id]")
        .forEach(card => {

            card.addEventListener("click", () => {

                const id =
                    Number(card.dataset.notificationId);

                const notification =
                    this.NOTIFICATIONS.find(
                        item => item.id === id
                    );

                if (notification) {

                    this.openNotification(notification);

                }

            });

        });

};

/*==========================================================
  Notification Detail
==========================================================*/

FRIENDNotifications.openNotification = function (
    notification
) {

    const existing =
        document.querySelector(".notification-overlay");

    if (existing) existing.remove();

    const overlay =
        document.createElement("div");

    overlay.className = "notification-overlay";

    overlay.innerHTML = `

        <div class="notification-modal">

            <div class="notification-modal-header">

                <div>

                    <h2>${notification.title}</h2>

                    <p>${notification.time}</p>

                </div>

                <button class="notification-close">
                    ×
                </button>

            </div>

            <div class="notification-modal-body">

                <div class="notification-type">

                    ${notification.type.toUpperCase()}

                </div>

                <div class="notification-description">

                    ${notification.message}

                </div>

                <div class="notification-owner">

                    Owner: ${notification.owner}

                </div>

            </div>

            <div class="notification-modal-footer">

                <button>
                    Mark Read
                </button>

                <button>
                    Close
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(overlay);

    overlay
        .querySelector(".notification-close")
        .addEventListener("click", () => overlay.remove());

    overlay
        .querySelectorAll(".notification-modal-footer button")[1]
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {

            overlay.remove();

        }

    });

};
