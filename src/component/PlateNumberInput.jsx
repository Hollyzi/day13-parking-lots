import React, { useContext } from 'react';
import { ParkingContext } from '../ParkingContext';

const PlateNumberInput = () => {
  const { plateNumber, setPlateNumber } = useContext(ParkingContext);

  return (
    <div>
      <label>
        Plate Number:
        <input
          type="text"
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
        />
      </label>
    </div>
  );
};

export default PlateNumberInput;