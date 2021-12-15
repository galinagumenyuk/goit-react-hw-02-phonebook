import { Container, ListTitle } from "./App.styled.jsx";
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

  getFilteredContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContact();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <ListTitle>Contacts</ListTitle>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <Contacts
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
