import React from "react";
import styles from "./style.css";

const Item = {
  display: "block",
  margin: "0.5rem 0",
  padding: "1rem 1rem",
  fontFamily: "Source Sans Pro",
  fontSize: 18,
  cursor: "pointer"
};
const RemoveButton = {
  marginLeft: 20,
  height: 20,
  border: "none",
  borderRadius: 5,
  display: "inline-block",
  fontSize: 10
};
export default ({ item, handleChange, removeTask }) => (
  <label htmlFor={item.id}>
    <div style={Item} className={styles.me}>
      <input
        id={item.id}
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
      <span style={{ paddingLeft: "1rem" }}>{item.text}</span>
      <button
        className={styles.btn}
        style={RemoveButton}
        onClick={() => removeTask(item.id)}
      >
        REMOVE
      </button>
    </div>
  </label>
);
