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
              <th>Available Position Number {parkingLots[lot].filter(position => !position).length}</th>
            </tr>
            </thead>
            <tbody>
            {Array.from({length: Math.ceil(parkingLots[lot].length / 3) }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 3 }).map((_, colIndex) => {
                    const index = rowIndex * 3 + colIndex;
                    return (
                      <td key={index}>
                        <div>Position {index + 1}</div>
                        <div>{parkingLots[lot][index] || 'Empty'}</div>
                      </td>
                    );
                  })}
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