import { useEffect, useState, useCallback } from "react";
import styles from "../styles/Home.module.css";

function TimeButton(props) {
    const { data } = props;
    const [logs, setLogs] = useState(data);
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        setLogs(data);
        const map = new Map();
        const airportMap = new Map();

        const handleTime = (time) => { //function to handle unit of time on console display
            if(time < 60) return time + " sec";
            if(time < 3600) return time/60 + " min";
            else return time/3600 + " hours";
        }

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
            let sumOfDifference = 0;
            let count = 0;
            value.forEach((item) => {
                sumOfDifference += item[1] - item[0];
                count++;
            });
            newDisplay.push(key + " : " + handleTime(sumOfDifference/count) + "\n");
        })
        setDisplay(newDisplay);

    }, [data]);

    const handleClick = () => {
        display.forEach((item) => {
            console.log(item);
        })
    }

    return <button className={styles.btn} onClick={handleClick}>Button</button>
}

export default TimeButton;