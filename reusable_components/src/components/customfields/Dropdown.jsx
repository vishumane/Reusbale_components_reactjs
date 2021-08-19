import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
    const { value, data, placeholder, styleClass, onChange = null } = props;

    console.log(value);
    return (
        <div className={`form-group ${styleClass}`}>
            <select
                value={value}
                className="form-control"
                onChange={onChange}>
                <option value="">{placeholder}</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
};

Dropdown.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    value: '',
    styleClass: '',
    placeholder: ''
};

export default Dropdown;