const FRIEND_ASSOCIATE = {
  render() {
    return `
      <section class="screen">
        <h1>Associate Mode</h1>
        <p>Welcome Alex. Please complete your Fresh Start and move to your next mission.</p>

        <div class="home-grid">
          <button onclick="FRIEND_NAVIGATION.goTo('freshStart')">Fresh Start</button>
          <button onclick="FRIEND_NAVIGATION.goTo('temperature')">Temperature Mission</button>
          <button onclick="FRIEND_NAVIGATION.goTo('training')">Training</button>
          <button onclick="FRIEND_NAVIGATION.goTo('home')">Home</button>
        </div>
      </section>
    `;
  }
};
