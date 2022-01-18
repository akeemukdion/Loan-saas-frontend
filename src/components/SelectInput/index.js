import React from "react";
import styles from "./select.module.css";
const SelectInput = ({ handleChange, name, optItem, label, ...otherProps }) => {
  // console.log(props.optItem);
  return (
    <div>
      {label && (
        <label className={styles.selectLabel} htmlFor={label}>
          {label}
        </label>
      )}
      <select
        className={styles.select}
        name={name}
        onChange={handleChange}
        {...otherProps}
      >
        <option>Select</option>
        {optItem?.map((s) => (
          <option key={s} name={name} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
