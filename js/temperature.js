const FRIEND_TEMPERATURE = {
  render() {
    return `
      <section class="screen">
        <h1>Temperature Mission</h1>
        <p>Sanitize probe, take temperature, and record result.</p>

        <div class="home-grid">
          <button>Target: 165°F</button>
          <button>Actual: 171°F</button>
          <button>Compliance: 100%</button>
          <button onclick="FRIEND_NAVIGATION.goTo('associate')">Back</button>
        </div>
      </section>
    `;
  }
};
