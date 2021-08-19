import React, { useState} from 'react'
import * as All from './components/customfields/index';

 const FieldTesting=()=> {

    const [value, setValue] = useState('');
    const [data, setData] = useState('');
    const [checked, setChecked] = useState(false);
 
    const Data = [
        { value: 1, label: 'India' },
        { value: 2, label: 'USA' },
        { value: 3, label: 'UK' },
        { value: 4, label: 'Germany' },
        { value: 5, label: 'Russia' },
        { value: 5, label: 'Italy' },
    ]

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const handleDropdown = (e) => {
        setData(e.target.value);
    };
    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };
    const handleCheckbox = (e) => {
        setChecked(e.target.checked)
    };

    return (
        <div>
            <center>
                <h3>reusable components in reactjs</h3>
            <form id="collectdata">
            Enter your Name :<All.InputBox
                data-testid="input"
                name="name"
                value={value}
                onChange={onChangeHandler}
                placeholderText='ENTER'
            />
          select country:<All.Dropdown
                data={Data}
                onChange={handleDropdown}
                value={data}
                placeholder='select the data'
            />
            Terms and Conditions:<All.CheckBox
                label='I Accept'
                selected={checked}
                onChange={handleCheckbox}
            />
                <All.Button
                onClick={handleClick}
                value='Submit'
            />
         </form>
         </center>
        </div>
    )
}
export default FieldTesting;