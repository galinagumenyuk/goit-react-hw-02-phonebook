import "./App.css";
// import PropTypes from "prop-types";
import React from "react";
import shortid from "shortid";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
  };

  nameInputId = shortid.generate();

  handleNameChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
              id={this.nameInputId}
            />
          </label>
          <button type="submit"> Add contact </button>
        </form>
        <p>Contacts</p>
      </div>
    );
  }
}

export default App;
