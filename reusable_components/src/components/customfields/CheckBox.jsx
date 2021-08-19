import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ label, selected, styleClass, onChange }) => {

    console.log(selected);
    return (
        <div className={`form-group ${styleClass}`}>
            <label>
                <input
                    type="checkbox"
                    className='mr-2'
                    value={selected}
                    defaultChecked={selected}
                    onChange={onChange} />
                {label}
            </label>
        </div>
    )
};

CheckBox.propTypes = {
    styleClass: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

CheckBox.defaultProps = {
    styleClass: ''
};

export default CheckBox;