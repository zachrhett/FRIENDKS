const FRIEND_SCORECARD = {
  render() {
    return `
      <section class="screen">
        <h1>Store Scorecard</h1>
        <p>Store health, alerts, Maximo, and operational readiness.</p>

        <div class="home-grid">
          <button>Store Health: 94%</button>
          <button>Alerts: 7</button>
          <button>Maximo: 5</button>
          <button onclick="FRIEND_NAVIGATION.goTo('home')">Home</button>
        </div>
      </section>
    `;
  }
};
