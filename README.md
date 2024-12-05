Prompt
feat:initial the parking demo

generate the front-end demo By React.the component should show Plat Number in a input box,show parking strategys by drop
down box(include standard,smart,SuperSmart strategies),two buttons provide park and fetch function,show 3 parkinglots
named"The Plaza Park"(has 9 positions),"City Mall Garage"(has 12 positions),"Office Tower Parking"(has 9 positions),the
positions should show in a table ,the parking positions should show the correspond plat number
the parking car information should be fetched by click fetch button to call the api of
post('http://localhost:8080/api/parking/fetch')

feat:generate static data to test ,and change method of fetch、park car

according to the demo,generate a data of json format send from back-end
use the data.json to initial ParkingDemo

refactor:refactor the ParkingDemo

Break ParkingDemo down into three components,
first component is plateNumber inputbox
second is parking strategys drop down box and two buttons provide park and fetch function,
third one is parkinglot.
utilize useEffect,useContext hooks to achieve Global state management,and ensure that the original implementation still
works after refactoring

feat:implement the ParkingControl

refactor handlePark method ,when handlePark call http://localhost:8080/api/parkinglotManager/park?strategy=[strategy],send parameter plateNumber format as
{
"plateNumber": "XY-2823"
}
response.data will like follow
{
"plateNumber": "XY-2823",
"position": 2,
"parkingLot": 1
}
according to the response.data,should updateParkingLot by parkingLot number,parkingLot number respectively correspond to parkingLot's order in the parkingLots
