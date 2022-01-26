import { useEffect, useState } from "react";

function TimeButton(props) {
    const { data } = props;
    const [logs, setLogs] = useState(data);
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        setLogs(data);
        const map = new Map();
        const airportMap = new Map();

        let newDisplay = [];
        data.forEach((item) => {
            if(map.has(item.passengerName) && map.get(item.passengerName)[0] != item.type) {
                let departureItem = map.get(item.passengerName);
                if(airportMap.has(`${departureItem[2]} to ${item.airport}`)) {
                    airportMap.get(`${departureItem[2]} to ${item.airport}`).push([parseInt(departureItem[1]),parseInt(item.timestamp)]);
                }
                else airportMap.set(`${departureItem[2]} to ${item.airport}`,[[parseInt(departureItem[1]),parseInt(item.timestamp)]]);
            } else map.set(item.passengerName, [item.type, item.timestamp, item.airport]);
        });

        airportMap.forEach((value, key) => {
            let difference = 0;
            value.forEach((item) => {
                difference += item[1] - item[0];
            });
            newDisplay.push(key + " : " + difference + " sec");
        })
        setDisplay(newDisplay);
        // console.log(airportMap);
        // console.log(map);
    }, [data]);

    const handleClick = () => {
        console.log(display);
    }

    return <button onClick={handleClick}>Button</button>
}

export default TimeButton;