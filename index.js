// const weatherKey="7c3675392b5dd8fb8b2abeb5c6b0abe8";

const wrapper = document.querySelector('.wrapper')
const search = document.querySelector('.search')
const weather = document.querySelector('.weather')
const details = document.querySelector('.details')


search.addEventListener('submit', function(e){
    e.preventDefault();
    const location = document.getElementById('location');
    const weatherKey = "7c3675392b5dd8fb8b2abeb5c6b0abe8";
    const city = document.querySelector('.search input').value;
    if (city == '')
        return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherKey}`).then(reponse => reponse.json()).then(json=>{
        const image = document.querySelector('.weather img');
        const temp = document.querySelector('.weather .temp');
        const description = document.querySelector('.weather .description')
        const humidity = document.querySelector('.details .humidity');
        const wind = document.querySelector('.details .wind');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src='image/clear.png';
                    break;
            case 'Rain':
                image.src='image/rain.png';
                break;
            case 'Cloud':
                image.src='image/cloud.png';
                break;
            case 'Drizzle':
                image.src='image/drizzle.png';
                break;
            case 'Mist':
                image.src='image/mist.png';
                break;
            case 'Snow':
                image.src='image/snow.png';
                break;
            default:
                image.src='image/cloud.png';
            }
        
        temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
        location.innerHTML = `${city}`


        wrapper.style.height = '610px';
        wrapper.style.top = '0';
        wrapper.style.background = 'linear-gradient(53deg, #01877e 0%, #f179b8 100%)';


        });

});
