import "./App.css";
import shortid from "shortid";
// import PropTypes from "prop-types";
import React from "react";
import Form from "./components/form/Form.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Filter from "./components/filter/Filter.jsx";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
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

  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <p>Contacts</p>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <Contacts contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
