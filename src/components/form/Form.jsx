import React from "react";


class Form extends React.Component {
    state = {name: "", number:""}
    
    handleNameChange = (e) => {
        this.setState({ name: e.currentTarget.value});
    }

    handleNumberChange = (e) => {
        this.setState({ number: e.currentTarget.value});
    }

     handleSubmit = (e) => {
        e.preventDefault();
         this.props.onSubmit(this.state);
         this.setState({ name: "", number: ""});
    };

        
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
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
                    />
                </label>
                <label>
                    number
                    <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleNumberChange}
                    />
                </label>
                <button type="submit"> Add contact </button>
            </form>
        )
    }
}

export default Form;