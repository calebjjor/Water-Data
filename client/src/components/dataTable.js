import React from 'react';
import styles from '../table.module.css';
const DataTable = ({ data }) => {
  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  const columns = Object.keys(data[0]); 
  columns.splice(0, 6); // Eliminate client qualitative data
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
