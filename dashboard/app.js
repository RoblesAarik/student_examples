class Inside extends React.Component {
  render() {
    return <div class="inside"></div>;
  }
}
class Bottom extends React.Component {
  render() {
    return (
      <div class="bottom">
        <h1>{this.props.title}</h1>
        <Inside />
      </div>
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <div class="left">
        <ul>
          <li>Dashboard</li>
          <li>Widget</li>
          <li>Reviews</li>
          <li>Customers</li>
          <li>Online Analysis</li>
          <li>Settings</li>
        </ul>
      </div>
    );
  }
}

class Small extends React.Component {
  render() {
    return (
      <div class="small">
        <h1>{this.props.title}</h1>
        <h1></h1>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Dashboard />
        <Small title="Reviews" />
        <Small title="Average Rating" />
        <Small title="Sentiment Analysis" />
        <div class="last">
          <Bottom title="Website Visitors" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("main"));
