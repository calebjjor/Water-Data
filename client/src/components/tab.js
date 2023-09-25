// Tab.js
import React from 'react';
import styles from '../tab.module.css'; // Import the CSS module

const Tab = ({ label, to }) => {
  return (
    <a href={to} className={styles.tab}>
      {label}
    </a>
  );
};

export default Tab;