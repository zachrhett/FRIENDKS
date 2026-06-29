const FRIEND_FRESH_START = {
  render() {
    return `
      <section class="screen">
        <h1>Fresh Start</h1>
        <p>Daily questions, compliance training, company communication, and new hire check-ins.</p>

        <div class="home-grid">
          <button>14 Due Assignments</button>
          <button>Development Compliance</button>
          <button>Company Communication</button>
          <button onclick="FRIEND_NAVIGATION.goTo('associate')">Back</button>
        </div>
      </section>
    `;
  }
};
