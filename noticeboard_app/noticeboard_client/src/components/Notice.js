import React from "react";
import Form from "./Form.js";

class Notice extends React.Component {
  state = {
    formVisible: false,
  };
  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };
  render() {
    const { notice, handleDelete } = this.props;
    return (
      <>
        {this.state.formVisible ? (
          <Form notice={notice} handleSubmit={this.props.handleUpdate} />
        ) : (
          <div className="notice">
            <h3>{notice.title}</h3>
            <p>{notice.author}</p>
            <small>{notice.phone}</small>
            <button onClick={() => handleDelete(notice)}>X</button>
            <button onClick={this.toggleForm}>Edit this Entry</button>
          </div>
        )}
      </>
    );
  }
}

export default Notice;
