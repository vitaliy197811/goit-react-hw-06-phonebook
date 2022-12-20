import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/slice';
import css from './Filter.module.css';

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onChange = e => dispatch(changeFilter(e.target.value));

    return(
        <label className={css.label}>
            Find contact by name
            <input
                type="name"
                value={filter}
                onChange={onChange}
                className={css.filter}
            />
        </label>
    )
};

export default Filter;