const screenRoot = () => document.getElementById("screen-root");

const screens = {
  home: () => import("./screens/home.js"),
  executive: () => import("./screens/executive.js"),
  analytics: () => import("./screens/analytics.js"),
  scorecard: () => import("./screens/scorecard.js"),
  leader: () => import("./screens/leader.js"),
  mission: () => import("./screens/mission.js"),
  maximo: () => import("./screens/maximo.js"),
  ai: () => import("./screens/ai.js"),
  alerts: () => import("./screens/alerts.js"),
};

export async function loadScreen(screenName = "home") {
  const root = screenRoot();

  if (!root) {
    console.error("Missing #screen-root");
    return;
  }

  const loader = screens[screenName];

  if (!loader) {
    root.innerHTML = `
      <section class="screen error-screen">
        <h1>Screen Not Found</h1>
        <p>${screenName}</p>
        <button data-screen="home">Return Home</button>
      </section>
    `;
    bindNavigation();
    return;
  }

  try {
    const module = await loader();
    root.innerHTML = module.render();

    if (typeof module.afterRender === "function") {
      module.afterRender();
    }

    bindNavigation();
  } catch (error) {
    console.error(error);

    root.innerHTML = `
      <section class="screen error-screen">
        <h1>Load Error</h1>
        <p>${screenName} could not load yet.</p>
        <button data-screen="home">Return Home</button>
      </section>
    `;

    bindNavigation();
  }
}

export function bindNavigation() {
  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextScreen = button.getAttribute("data-screen");
      loadScreen(nextScreen);
    });
  });
}
