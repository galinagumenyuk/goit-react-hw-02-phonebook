import "./App.css";
import shortid from "shortid";
// import PropTypes from "prop-types";
import React from "react";
import Form from "./components/form/Form.jsx";
import Contacts from "./components/contacts/Contacts.jsx";

class App extends React.Component {
  state = {
    contacts: [],
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
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
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
