Prompt
1.feat:initial the parking demo

generate the front-end demo By React.the component should show Plat Number in a input box,show parking strategys by drop
down box(include standard,smart,SuperSmart strategies),two buttons provide park and fetch function,show 3 parkinglots
named"The Plaza Park"(has 9 positions),"City Mall Garage"(has 12 positions),"Office Tower Parking"(has 9 positions),the
positions should show in a table ,the parking positions should show the correspond plat number
the parking car information should be fetched by click fetch button to call the api of
post('http://localhost:8080/api/parking/fetch')

2.feat:generate static data to test ,and change method of fetch、park car

according to the demo,generate a data of json format send from back-end
use the data.json to initial ParkingDemo

3.refactor:refactor the ParkingDemo

Break ParkingDemo down into three components,
first component is plateNumber inputbox
second is parking strategys drop down box and two buttons provide park and fetch function,
third one is parkinglot.
utilize useEffect,useContext hooks to achieve Global state management,and ensure that the original implementation still
works after refactoring

4.feat:implement the ParkingControl

refactor handlePark method ,when handlePark
call http://localhost:8080/api/parkinglotManager/park?strategy=[strategy],send parameter plateNumber format as
{
"plateNumber": "XY-2823"
}
response.data will like follow
{
"plateNumber": "XY-2823",
"position": 2,
"parkingLot": 1
}
according to the response.data,should updateParkingLot by parkingLot number,parkingLot number respectively correspond to
parkingLot's order in the parkingLots

5.refactor:refactor the parkinglot in sudoko format

refactor demo to show the parkinglots position as like square grid

6.feat:generate css file to beautify the component

generate css file to beautify the component .Use a minimalist style.Each component keep reasonable space.Hope that
ParkingLot's position can seperate by lines, the license plate in the parking space is displayed in the box

7.feat:implement the show entryTime,exitTime and parkingDuration
fetched Data will show as
{
"car": {
"plateNumber": "LM-1456"
},
"entryTime": "2024-12-07T21:17:07.1102864",
"exitTime": "2024-12-07T21:25:36.191944",
"parkingDuration": "0 hours 8 minutes"
}
generate demo to show the  message of entryTime,exitTime and parkingDuration,time should  format as
"yyyy-MM-dd HH:mm"
