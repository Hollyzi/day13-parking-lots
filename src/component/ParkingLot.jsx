import React, { useContext } from 'react';
import { ParkingContext } from '../ParkingContext';

const ParkingLot = () => {
  const { parkingLots } = useContext(ParkingContext);

  return (
    <div>
      {Object.keys(parkingLots).map((lot) => (
        <div key={lot}>
          <h3>{lot}</h3>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Plate Number</th>
              </tr>
            </thead>
            <tbody>
              {parkingLots[lot].map((plate, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{plate || 'Empty'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ParkingLot;