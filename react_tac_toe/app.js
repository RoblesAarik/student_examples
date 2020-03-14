class Header extends React.Component {
  render() {
    return <h1>React Tac Toe</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Heyo! Play soe TTT</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
