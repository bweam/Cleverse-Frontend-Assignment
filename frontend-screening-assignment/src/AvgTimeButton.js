import { useEffect, useState } from "react";

function TimeButton(props) {
    const { data } = props;
    const [logs, setLogs] = useState(data);
    const [display, setDisplay] = useState("");

    useEffect(() => {
        setLogs(data);

        let newDisplay = "";
        data.forEach((item) => {
            console.log(item);
            newDisplay = newDisplay.concat(item.timestamp + "\n");
        })

        setDisplay(newDisplay);
    }, [data]);

    const handleClick = () => {
        console.log(display);
    }

    return <button onClick={handleClick}>Button</button>
}

export default TimeButton;