// const container = document.querySelector('.container')
// const search = document.querySelector('.search-box button')
// const weatherBox = document.querySelector('.weather-box')
// const weatherDetails = document.querySelector('.weather-info')

// search.addEventListener('click', () => {

//     const APIKey = 'fb8961f7145d0fd1cc2f1f6c5bf304f1';
//     const city = document.querySelector('.search-box input').value;

//     if (city === '')
//         return;

//     fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then(json => {

//         const image = document.querySelector('.weather-box img');
//         const temperature = document.querySelector('.weather-box temperature');
//         const description = document.querySelector('.weather-box description');
//         const humidity = document.querySelector('.weather-info humidity');
//         const wind = document.querySelector('.weather-info wind');

//         switch (json.weather[0].main) {
//             case 'Clear':
//                 image.src = '/clear.png';
//                 break;

//             case 'Rain':
//                 image.src = '/rain.png';
//                 break;

//             case 'Clouds':
//                 image.src = '/cloud.png';
//                 break;

//             case 'Mist':
//                 image.src = '/mist.png';
//                 break;

//             case 'Snow':
//                 image.src = '/snow.png';
//                 break;

//             default:
//                 image.src = '';
//         }

//         temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`

//         description.innerHTML = `${json.weather[0].description}`;
//         humidity.innerHTML = `${json.main.humidity}%`;
//         wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;




//     });

// });



const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-info');

search.addEventListener('click', () => {
    const APIKey = '';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-info .humidity span');
            const wind = document.querySelector('.weather-info .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '/clear.png';
                    break;

                case 'Rain':
                    image.src = '/rain.png';
                    break;

                case 'Clouds':
                    image.src = '/cloud.png';
                    break;

                case 'Haze':
                    image.src = '/mist.png';
                    break;

                case 'Snow':
                    image.src = '/snow.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)} km/h`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});