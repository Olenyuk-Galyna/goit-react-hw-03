import React, { useId } from "react";
import css from "./SearchBox.module.css";

export default function Filter({ value, onFilter }) {
  return (
    <div>
      <label className={css.label}>
        <span className={css.text}>Find contact by name</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
};
