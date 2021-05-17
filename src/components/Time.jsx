import React, { useEffect, useState } from "react";

export default function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
    }, [time]);
    // console.log(time)
    return (
        <>
            <div className="time">{time}</div>
        </>

    )
}