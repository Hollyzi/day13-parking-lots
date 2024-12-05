import React from 'react';
import { ParkingProvider } from './ParkingContext';
import PlateNumberInput from './component/PlateNumberInput';
import ParkingControls from './component/PackingControls';
import ParkingLot from './component/ParkingLot';

const ParkingDemo = () => {
  return (
    <ParkingProvider>
      <PlateNumberInput />
      <ParkingControls />
      <ParkingLot />
    </ParkingProvider>
  );
};

export default ParkingDemo;