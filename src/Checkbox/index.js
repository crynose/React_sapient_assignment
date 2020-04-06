import React from 'react';

const Checkbox = ({
  id,
  onClick,
  isChecked,
  value,
  group,
}) => {
  return(
    <div>
      <input
        id={id}
        onClick={(e) => {
          onClick(id, group, e.target.checked)
        }}
        type='checkbox'
        checked={isChecked}
        value={value}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  )
}

export default Checkbox;
