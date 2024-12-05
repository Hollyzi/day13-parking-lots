import React, { useContext } from 'react';
import { ParkingContext } from '../ParkingContext';
import axios from 'axios';

const ParkingControls = () => {
  const { plateNumber, strategy, setStrategy, parkingLots, setParkingLots } = useContext(ParkingContext);

  const handlePark = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/parkinglotManager/park?strategy=${strategy}`, {
        plateNumber
      });
      const { plateNumber: parkedPlate, position, parkingLot } = response.data;

    const updatedParkingLots = { ...parkingLots };
      const lotNames = Object.keys(updatedParkingLots);
      const lotName = lotNames[parkingLot - 1];

      if (lotName) {
        updatedParkingLots[lotName][position-1] = parkedPlate;
      setParkingLots(updatedParkingLots);
    } else {
        alert('Invalid parking lot number in response.');
      }
    } catch (error) {
      console.error('Error parking the car:', error);
      alert('Failed to park the car.');
    }
  };

  const handleFetch = async () => {
    const updatedParkingLots = { ...parkingLots };
    try {
      const response = await axios.post('http://localhost:8080/api/parkinglotManager/fetch', { plateNumber });
      const fetchedData = response.data;
      for (const lot in updatedParkingLots) {
        updatedParkingLots[lot] = updatedParkingLots[lot].map((car) => car === plateNumber ? null : car);
      }
      setParkingLots(updatedParkingLots);
    } catch (error) {
      console.error('Error fetching parking data:', error);
    }
  };

  return (
    <div>
      <label>
        Parking Strategy:
        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
        >
          <option value="standard">Standard</option>
          <option value="smart">Smart</option>
          <option value="superSmart">SuperSmart</option>
        </select>
      </label>
      <div>
        <button onClick={handlePark}>Park</button>
        <button onClick={handleFetch}>Fetch</button>
      </div>
    </div>
  );
};

export default ParkingControls;