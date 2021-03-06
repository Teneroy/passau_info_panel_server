import express from 'express';
import axios from 'axios';
import keys from '../configs/keys.json'

const router = express.Router();

router.get('/weather', async (req, res) => {
    const city: string = <string>(req.query.city === undefined ? '' : req.query.city);

    if(city.length === 0)
        return;

    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid='+ keys.weather)
        .then(response => {
            const data: any = response.data;
            res.send({
                "city": city,
                "temperature": data.main.temp,
                "humidity": data.main.humidity,
                "feels_like": data.main.feels_like,
                "wind": data.wind.speed,
                "icon": data.weather[data.weather.length - 1].icon
            });
        })
        .catch(error => {
            console.log(error);
        });
});

export default router;
