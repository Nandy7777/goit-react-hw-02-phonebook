// import { render } from '@testing-library/react';
import { Component } from 'react';
// import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';


class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
  };

  //вебинар 3. События и состояние. 16.06.20    1.46.49 доробити видалення

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    // const { contacts } = this.state;

    return (
      <>
        <ContactForm />
      </>
    );
  }
}


export default App;