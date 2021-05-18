import React, { useEffect, useState } from "react";

export default function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        let timerId = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timerId);
    }, [time]);
    return (
        <>
            <div className="time">{time}</div>
        </>

    )
}