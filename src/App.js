import "./App.css";
import shortid from "shortid";
// import PropTypes from "prop-types";
import React from "react";
import Form from "./components/form/Form.jsx";

class App extends React.Component {
  state = {
    contacts: [],
  };

  addContact = (name) => {
    const contact = {
      id: shortid.generate(),
      name,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <p>Contacts</p>
      </div>
    );
  }
}

export default App;
