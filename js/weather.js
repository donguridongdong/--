const APIKEY = "68d84781a57e195e73e54974c4ffe201";

function geo(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    //url에서 마지막부분에 &units-metric을 추가해야 섭씨온도가 됨.
    fetch(url) //이부분은 유튜브클론 강의 들어야 한다고함 fetch랑 then사용법
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
        });
}

function nogeo() {
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(geo, nogeo);