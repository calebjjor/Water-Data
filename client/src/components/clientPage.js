import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataTable from './dataTable';

const SampleTypeData = ({ clientName, sampleType }) => {
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    // Fetch data for the specified sample type and client from Express API
    fetch(`http://localhost:5000/api/sampleTypes/${clientName}/${encodeURIComponent(sampleType)}`)
      .then((response) => response.json())
      .then((data) => setSampleData(data));
  }, [clientName, sampleType]);


  return (
    <div>
      <h3>Data for {sampleType}</h3>
      <DataTable data={sampleData} />
    </div>
  );
};

const ClientData = () => {
  const { clientName } = useParams();
  const [sampleTypes, setSampleTypes] = useState([]);
  const [selectedSampleType, setSelectedSampleType] = useState('');

  useEffect(() => {
    // Fetch sample types for the selected client
    fetch(`http://localhost:5000/api/sampleTypes/${clientName}`)
      .then((response) => response.json())
      .then((data) => setSampleTypes(data));
  }, [clientName]);

  const handleSampleTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedSampleType(selectedType);
  };

  return (
    <div>
      <h2>Data for {clientName}</h2>
      {/* Dropdown menu to select a sample type */}
      <select value={selectedSampleType} onChange={handleSampleTypeChange}>
        <option value="">Select a Sample Type</option>
        {sampleTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Display data for the selected sample type */}
      {selectedSampleType && (
        <SampleTypeData clientName={clientName} sampleType={selectedSampleType} />
      )}
    </div>
  );
};

export default ClientData;