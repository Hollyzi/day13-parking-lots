import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ParkingContext = createContext();

export const ParkingProvider = ({ children }) => {
  const [plateNumber, setPlateNumber] = useState('');
  const [strategy, setStrategy] = useState('standard');
  const [parkingLots, setParkingLots] = useState({
    'The Plaza Park': Array(9).fill(null),
    'City Mall Garage': Array(12).fill(null),
    'Office Tower Parking': Array(9).fill(null),
  });

  useEffect(() => {
    const fetchParkingData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/parkinglotManager/cars');
        const parkingData = response.data;
        const formattedParkingData = {};
        for (const lot in parkingData) {
          formattedParkingData[lot] = parkingData[lot].map((car) => car ? car.plateNumber : null);
          while (formattedParkingData[lot].length < parkingLots[lot].length) {
            formattedParkingData[lot].push(null);
          }
        }
        setParkingLots(formattedParkingData);
      } catch (error) {
        console.error('Error fetching parking data:', error);
      }
    };

    fetchParkingData();
  }, []);

  return (
    <ParkingContext.Provider value={{ plateNumber, setPlateNumber, strategy, setStrategy, parkingLots, setParkingLots }}>
      {children}
    </ParkingContext.Provider>
  );
};