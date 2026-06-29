const FRIEND_MAXIMO = {
  render() {
    return `
      <section class="screen">
        <h1>Maximo</h1>
        <p>Work orders, preventive maintenance, and asset management.</p>

        <div class="home-grid">
          <button>Open Work Orders (5)</button>
          <button>PM Schedule</button>
          <button>Equipment Status</button>
          <button onclick="FRIEND_NAVIGATION.goTo('home')">Home</button>
        </div>
      </section>
    `;
  }
};
