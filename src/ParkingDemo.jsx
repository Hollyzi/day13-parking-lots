import { useState, useEffect } from "react";
import axios from "axios";
import parkingData from "./data.json";

const ParkingDemo = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [strategy, setStrategy] = useState('standard');
  const [parkingLots, setParkingLots] = useState({
    'The Plaza Park': Array(9).fill(null),
    'City Mall Garage': Array(12).fill(null),
    'Office Tower Parking': Array(9).fill(null),
  });

  useEffect(() => {
    const formattedParkingData = {};
    for (const lot in parkingData) {
      formattedParkingData[lot] = parkingData[lot].map((car) => car ? car.plateNumber : null);
    }
    setParkingLots(formattedParkingData);
  }, []);

  const handlePark = () => {
    const updatedParkingLots = { ...parkingLots };
    let parked = false;

    for (const lot in updatedParkingLots) {
      for (let i = 0; i < updatedParkingLots[lot].length; i++) {
        if (updatedParkingLots[lot][i] === null) {
          updatedParkingLots[lot][i] = plateNumber;
          parked = true;
          break;
        }
      }
      if (parked) break;
    }

    if (parked) {
      //todo send post request to server
      setParkingLots(updatedParkingLots);
      setPlateNumber('');
    } else {
      alert('No available parking spots.');
    }
  };

  const handleFetch = async () => {
    const updatedParkingLots = { ...parkingLots };
    for (const lot in parkingData) {
      updatedParkingLots[lot] = parkingData[lot].map((car) => car && car.plateNumber === plateNumber ? null : car ? car.plateNumber : null);
    }
    setParkingLots(updatedParkingLots);
    // try {
    //   //todo send get request to server
    //   const response = await axios.post('http://localhost:8080/api/parking/fetch', { plateNumber });
    //   const fetchedData = response.data;
    //   setParkingLots(fetchedData);
    // } catch (error) {
    //   console.error('Error fetching parking data:', error);
    // }
  };

  return (
    <div>
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
      </div>
      <div>
        <button onClick={handlePark}>Park</button>
        <button onClick={handleFetch}>Fetch</button>
      </div>
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
    </div>
  );
};

export default ParkingDemo;