const url ='https://www.yr.no/api/v0/regions/NO-03/watertemperatures?fbclid=IwAR3bwsQ8BvcT0vajGJ1dXc2VNVd_m03wQMEo9YzR4-FnvMdQvqN0xxeK5Ro';

export async function getWatertemp () {
    const response = await fetch(url);
    const result = await response.json(); 

    console.log(result)

    const averageTemp = (result.reduce((previous, current) => {
        return previous + current.temperature
    }, 0) / result.length).toFixed(1);

    console.log(averageTemp)
    const averageTempEl = document.getElementById('average-beaches-temp');
    averageTempEl.textContent = `${averageTemp} ° Badetempratur`;
}