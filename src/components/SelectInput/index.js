import React from "react";
import styles from './select.module.css'
const SelectInput = ({ handleChange,optItem,label,...otherProps }, props) => {
    // console.log(props.optItem);
  return (
    <div>
        {label && <label className={styles.selectLabel} htmlFor={label} >{label}</label>}
      <select className={styles.select} {...otherProps} onChange={handleChange}>
        <option {...otherProps}>Select</option>
        {optItem?.map((s) => (
          <option key={s} name={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;