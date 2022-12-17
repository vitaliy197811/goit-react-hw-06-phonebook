import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
    <label className={css.label}>
        Find contact by name
        <input
            type="name"
            value={filter}
            onChange={onChange}
            className={css.filter}
        />
    </label>
);

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;