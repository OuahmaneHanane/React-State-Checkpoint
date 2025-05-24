import React, { Component } from "react";
import "./App.css";

// Class-based App component
class App extends Component {
  // Initial state with Person object and show boolean
  state = {
  person: {
    fullName: "Albert Einstein",
    bio: "Theoretical physicist known for the theory of relativity and contributions to quantum mechanics.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    profession: "Physicist",
  },
  shows: false,
  mountedTime: 0,
};

  // Timer reference
  timer = null;

  // Lifecycle method: called once component mounts
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  // Lifecycle method: cleanup on unmount
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Toggle visibility of the profile
  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        {/* Toggle button */}
        <button onClick={this.toggleProfile}>
          {shows ? "Hide" : "Show"} Profile
        </button>

        {/* Show person profile if `shows` is true */}
        {shows && (
          <div style={{ marginTop: "20px" }}>
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt="profile" style={{ width: "200px" }} />
            <p><strong>Bio:</strong> {person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}

        {/* Show time since component mounted */}
        <p style={{ marginTop: "30px" }}>
          Component mounted <strong>{mountedTime}</strong> second(s) ago.
        </p>
      </div>
    );
  }
}

export default App;
