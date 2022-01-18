import React from "react";
import styles from "./style.module.css";
const Notification = () => {
  return (
    <div>
      <i className={`${styles.notification} fa fa-bell`}></i>
    </div>
  );
};

export default Notification;
