
import React from 'react';
import PropTypes from 'prop-types';

const InputBox = (props) => {
    const { value, name, onChange, placeholder = null } = props;

    console.log(value);
    return (
        <div>
            <input type='text'
                value={value}
                name={name}
                ref={props.inputRef}
                onChange={onChange}
                placeholder={placeholder}
                className={props.className}
            >

            </input>
        </div>
    )
}
InputBox.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,

}


export default InputBox;