import React from 'react';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  spouse?: string;
  gameCenterId?: string;
  image?: string;
}

interface Props {
  contacts: Contact[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export const ContactList: React.FC<Props> = ({ contacts, selectedId, onSelect }) => {
  const grouped = contacts.reduce<Record<string, Contact[]>>((acc, contact) => {
    const letter = contact.name[0].toUpperCase();
    acc[letter] = acc[letter] || [];
    acc[letter].push(contact);
    return acc;
  }, {});

  const sortedKeys = Object.keys(grouped).sort();

  return (
    <div style={{ width: '30%', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
      <div style={{ padding: '1rem', fontWeight: 'bold' }}>Contacts</div>
      {sortedKeys.map((letter) => (
        <div key={letter}>
          <div style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: '#999' }}>{letter}</div>
          {grouped[letter].map((contact) => (
            <div
              key={contact.id}
              style={{
                padding: '0.75rem 1rem',
                background: selectedId === contact.id ? '#eee' : 'white',
                cursor: 'pointer',
              }}
              onClick={() => onSelect(contact.id)}
            >
              {contact.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
