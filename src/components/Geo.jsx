import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";


const Geo = React.memo(function () {
    const [data, setData] = useState({});

    const TOKEN = "4fc583d48566ceb93d0b13f78df16546";
    const defaultLat = 50.2716;
    const defaultLon = 30.30;
    function getApiData(lat = defaultLat, lon = defaultLon, token = TOKEN) {
        axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&lang=ru&units=metric`)
            .then(res => setData(res.data))
    }

    useEffect(() => {
        new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(success);
            function success(pos) {
                let crd = pos.coords;
                resolve(crd);
            }
        }).then(coord => getApiData(coord.latitude, coord.longitude));
    }, []);

    function getCurrentTemperature(temp) {
        const toFix = temp.toFixed(0);
        if (toFix > 0) {
            return `+${toFix} °C`;
        } else if (toFix < 0) {
            return `-${toFix} °C`;
        } else {
            return `${toFix} °C`;
        }
    }

    const currentTemperature = data.main && getCurrentTemperature(data.main.temp);
    const currentCity = data && data.name;

    return (
        <div >
            <div>Ваш город: {currentCity}</div>
            <div >Температура воздуха: <span className="temperature">{currentTemperature}</span></div>
        </div>
    )
})

export default Geo;