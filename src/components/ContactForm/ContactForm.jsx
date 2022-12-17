import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
    const [ name, setName ] = useState('');
    const [ number, setNumber ] = useState('');

    const handleChange = e => {
        switch (e.target.name) {
            case 'name':
            setName(e.target.value);
                break;
            case 'number':
            setNumber(e.target.value);
                break;
            default:
                break;
        }
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            name,
            number,
        });
        resetForm();
    };

    return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
        <label className={css.label}>Name
            <input
                className={css.input}
                type="text"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Rosie Simpson"
            />
        </label>
        <label className={css.label}>Number
            <input
                className={css.input}
                type="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                name="number"
                value={number}
                onChange={handleChange}
                placeholder="459-12-56"
            />
        </label>
        <button type="submit" className={css.button}>Add contact</button>
    </form>
    );
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;