const FRIEND_TRAINING = {
  render() {
    return `
      <section class="screen">
        <h1>Training</h1>
        <p>Compliance training, skill development, and associate readiness.</p>

        <div class="home-grid">
          <button>Compliance Due</button>
          <button>Skill Building</button>
          <button>Policy Review</button>
          <button onclick="FRIEND_NAVIGATION.goTo('associate')">Back</button>
        </div>
      </section>
    `;
  }
};
