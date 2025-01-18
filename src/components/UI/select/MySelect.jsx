import React from 'react';

const MySelect = ({options, defaultOption, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={
                event => onChange(event.target.value)
            }>
            <option disabled value="">{defaultOption}</option>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.title}</option>
            ))}
        </select>
    );
};

export default MySelect;