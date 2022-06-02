const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.91389&lon=10.75449&altitude=11';

export async function getWeather() {
    // hämtar data från extern källa
    const response = await fetch(url);
    // konverter response til json med funksjonen json()
    const result = await response.json(); 
    const mainEl = document.getElementById('app');

    //Hente ut nåvärende time fra to karakterer og kombinerer dem
    const currentDate = new Date();
    const hoursNow = `${currentDate.getHours()}:00`;
    const currentIndex = result.properties.timeseries.find(serie => {
        return serie.time.includes(hoursNow);
    });

    const currentTemperature = currentIndex.data.instant.details.air_temperature;
    //logger resultatet av all koden

    const temperaturElement = document.querySelector('.weather-content');
    temperaturElement.textContent = `${currentTemperature} ° Værmelding`;
    // temperaturElement.textContent = currentTemperature 'Været i dag';
    //mainEl.append(temperaturElement);


    const sky_situation = currentIndex.data.next_1_hours.summary.symbol_code;
    console.log(sky_situation)
    const weather_cont = document.querySelector('#weather-icon');
    
    weather_cont.style.backgroundImage= `url(../assets/Icons/${sky_situation}.svg)`
    

};
