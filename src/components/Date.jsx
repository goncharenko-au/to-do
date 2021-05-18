import React from "react";

export default function DateTodo() {
    const convertDate = {
        "1": "января",
        "2": "февраля",
        "3": "марта",
        "4": "апреля",
        "5": "мая",
        "6": "июня",
        "7": "июля",
        "8": "августа",
        "9": "сентября",
        "10": "октября",
        "11": "ноября",
        "12": "декабря"
    }
    const convertDay = {
        "0": "воскресенье",
        "1": "понедельник",
        "2": "вторник",
        "3": "среда",
        "4": "четверг",
        "5": "пятница",
        "6": "суббота"
    }

    function getCurrentDate() {
        let date = new Date().getDate();
        if (date <= 9) {
            return `0${date}`
        } else {
            return date;
        }
    }
    function getCurrentMonth() {
        let month = (new Date().getMonth()) + 1;
        for (let key in convertDate) {
            if (month == key) {
                return convertDate[key];
            }
        };
    }
    function getCurrentDay() {
        let day = new Date().getDay();
        for (let key in convertDay) {
            if (day == key) {
                return convertDay[key];
            }
        };
    }

    return (
        <div>
            <div className="field__date">
                {`${getCurrentDate()} ${getCurrentMonth()}, ${getCurrentDay()}`}
            </div>

        </div>
    )
}