const FRIEND_ALERTS = {
  render() {
    return `
      <section class="screen">
        <h1>Alerts</h1>
        <p>Store alerts requiring attention.</p>

        <div class="home-grid">
          <button>7 Active Alerts</button>
          <button>Food Safety</button>
          <button>Labor Risk</button>
          <button onclick="FRIEND_NAVIGATION.goTo('home')">Home</button>
        </div>
      </section>
    `;
  }
};
