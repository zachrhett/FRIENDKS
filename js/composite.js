const FRIEND_COMPOSITE = {
  render() {
    return `
      <section class="screen">
        <h1>Composite Scorecard</h1>
        <p>Detailed drill-down view for store, department, and metric performance.</p>

        <div class="home-grid">
          <button>Production</button>
          <button>Labor</button>
          <button>Inventory</button>
          <button onclick="FRIEND_NAVIGATION.goTo('home')">Home</button>
        </div>
      </section>
    `;
  }
};
