import React, { useEffect, useState } from "react";

export default function DateTodo() {
    const date = new Date();

    function addedZero(value, correction = 0) {
        const resultValue = value + correction;
        if (resultValue <= 9) {
            return `0${resultValue}`;
        } else {
            return resultValue;
        }
    }

    const getCurDate = () => {
        let curDate = addedZero(date.getDate());
        let curMonth = addedZero(date.getMonth(), 1);
        return `${curDate}.${curMonth}.${date.getFullYear()}`;
    };

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    }, [setTime]);
    return (
        <>
            <div className="field__date">
                {getCurDate()}</div>
            <div className="field__time">
                {time}
            </div>
        </>
    )
}