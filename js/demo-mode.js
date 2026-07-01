const screenRoot =
  document.getElementById("screen-root") ||
  document.getElementById("app") ||
  document.querySelector("main") ||
  document.body;

const demoScreens = {
  home: "./screens/home.js",
  executive: "./screens/executive.js",
  analytics: "./screens/analytics.js",
  scorecard: "./screens/scorecard.js",
  leader: "./screens/leader.js",
  mission: "./screens/mission.js",
  maximo: "./screens/maximo.js",
  ai: "./screens/ai.js",
  alerts: "./screens/alerts.js",
};

async function openDemoScreen(screenName = "home") {
  const path = demoScreens[screenName];

  if (!path) {
    screenRoot.innerHTML = `
      <section class="screen screen-card">
        <h1>Screen Not Found</h1>
        <p>${screenName}</p>
        <button data-screen="home">Return Home</button>
      </section>
    `;
    bindDemoNavigation();
    return;
  }

  try {
    const module = await import(path);
    screenRoot.innerHTML = module.render();

    if (typeof module.afterRender === "function") {
      module.afterRender();
    }

    bindDemoNavigation();
  } catch (error) {
    console.error(error);

    screenRoot.innerHTML = `
      <section class="screen screen-card">
        <h1>Module Load Error</h1>
        <p>${screenName} could not load.</p>
        <button data-screen="home">Return Home</button>
      </section>
    `;

    bindDemoNavigation();
  }
}

function bindDemoNavigation() {
  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.onclick = () => {
      const target = button.getAttribute("data-screen");
      openDemoScreen(target);
    };
  });
}

window.FRIEND_DEMO = {
  open: openDemoScreen,
};

document.addEventListener("DOMContentLoaded", () => {
  openDemoScreen("home");
});
