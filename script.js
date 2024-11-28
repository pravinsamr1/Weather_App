const apiKey = "9132e4739b823e95109ee257802a4eec"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon" )

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)

    // if(response.status == 404){
    //     document.querySelector('.error').style.display = 'block'
    // }
    var data = await response.json()

    console.log(data)


    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +  "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h"


    if (data.weather[0].main == "Clouds"){
        weathericon.src="assests/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src="assests/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src="assests/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src="assests/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src="assests/mist.png"
    }
    

    document.querySelector('.weather').style.display = 'block'
}



searchBtn.addEventListener('click', ()=>[
    checkWeather(search.value)
 
])

