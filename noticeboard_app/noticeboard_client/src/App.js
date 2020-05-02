import React from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

class App extends React.Component {
  state = {
    notices: [],
  };

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("/notices", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdNotice) => createdNotice.json())
      .then((jsonedNotice) => {
        // add notice to notices
        this.setState({
          notices: [jsonedNotice, ...this.state.notices],
        });
      })
      .catch((error) => console.log(error));
  };

  handleDelete = (deletedNotice) => {
    fetch(`/notices/${deletedNotice.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const notices = this.state.notices.filter(
          (notice) => notice.id !== deletedNotice.id
        );
        this.setState({ notices });
      })
      .catch((error) => console.log(error));
  };

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    console.log("in it to win it");
    fetch(`/notices/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((updatedNotice) => {
        // be naughty
        this.getNotices();
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getNotices();
  }

  getNotices = () => {
    fetch("/notices")
      .then((response) => response.json())
      .then((json) => this.setState({ notices: json }))
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            notices={this.state.notices}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
