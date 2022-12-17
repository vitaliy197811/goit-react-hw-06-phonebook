import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={css.contacts}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.item}>
                <ContactItem 
                    id={id} 
                    name={name} 
                    number={number} 
                    onDeleteContact={onDeleteContact} />
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;