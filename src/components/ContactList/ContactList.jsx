import ContactListItem from 'components/ContactListItem';

export default function ContactList({ contacts }) {
    return (
      <ul>
        {contacts.map(({ id, name, number  }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
          />
        ))}
      </ul>
    );
}
    
