import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './App.styled';
import { GlobalStyles } from 'components/GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Modal } from 'components/Modal/Modal';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal: false,
    showForm: false,
  };

  componentDidMount() {
    console.log('App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${name} is already in contacts list`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));

    this.toggleModal2();
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // updateContactsList = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   const filterContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   return filterContacts;
  // };

  toggleModal1 = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  toggleModal2 = () => {
    this.setState(({ showForm }) => ({ showForm: !showForm }));
  };

  render() {
    // const updatedContacts = this.updateContactsList();
    const { filter, showModal, showForm } = this.state;

    return (
      <Layout>
        <ErrorBoundary fallback="Ooops">
          <GlobalStyles />s
          <button type="button" onClick={this.toggleModal2}>
            Add Contact
          </button>
          {showForm && (
            <Modal onClose={this.toggleModal2}>
              <h1>Phonebook</h1>
              <ContactForm onAddContact={this.addContact} />
              <button type="button" onClick={this.toggleModal2}>
                Close
              </button>
            </Modal>
          )}
          <button type="button" onClick={this.toggleModal1}>
            Open Modal
          </button>
          {showModal && (
            <Modal onClose={this.toggleModal1}>
              <h1> Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                libero velit, ratione vitae nisi deserunt unde exercitationem
                labore hic sed reprehenderit, provident nobis est eius. Sapiente
                recusandae placeat aliquam mollitia!
              </div>
              <button type="button" onClick={this.toggleModal}>
                Close
              </button>
            </Modal>
          )}
          <h2>Contacts</h2>
          <Filter value={filter} onFilterChange={this.filterContacts} />
          <ContactList
            // contacts={updatedContacts}
            deleteContact={this.deleteContact}
          />
        </ErrorBoundary>
      </Layout>
    );
  }
}
