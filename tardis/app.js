class DivOne extends React.Component {
  render() {
    return (
      <div>
        <DivTwo
          changeIt={this.props.changeIt}
          tardis={this.props.tardis}
          changeSecond={this.props.changeSecond}
          second={this.props.second}
        />
      </div>
    );
  }
}

class DivTwo extends React.Component {
  render() {
    return (
      <div>
        <DivThree changeIt={this.props.changeIt} tardis={this.props.tardis} />
        <DivFour
          changeSecond={this.props.changeSecond}
          second={this.props.second}
        />
      </div>
    );
  }
}

class DivThree extends React.Component {
  render() {
    return (
      <div className="topTextContainer">
        <h3 onClick={this.props.changeIt}> {this.props.tardis.name} </h3>
      </div>
    );
  }
}

class DivFour extends React.Component {
  render() {
    return (
      <div className="bottomTextContainer">
        <h3 onClick={this.props.changeSecond}> {this.props.second.name} </h3>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false,
    },
    second: {
      name: "Time and Relative Dimension in Space",
      caps: false,
    },
  };

  changeIt = () => {
    let tardis = this.state.tardis.name;
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: tardis.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: tardis.toUpperCase(),
          caps: true,
        },
      });
    }
  };

  changeSecond = () => {
    let second = this.state.second.name;
    if (this.state.second.caps) {
      this.setState({
        second: {
          name: second.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        second: {
          name: second.toUpperCase(),
          caps: true,
        },
      });
    }
  };

  render() {
    console.log(this.state.second.name);
    return (
      <div>
        <DivOne
          changeIt={this.changeIt}
          tardis={this.state.tardis}
          changeSecond={this.changeSecond}
          second={this.state.second}
        />
      </div>
    );
  }
}
