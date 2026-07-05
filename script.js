const cities = {
    Seoul: { utcOffset: 9, name: '서울' },
    Tokyo: { utcOffset: 9, name: '도쿄' },
    London: { utcOffset: 0, name: '런던' },
    NewYork: { utcOffset: -5, name: '뉴욕' },
    Sydney: { utcOffset: 10, name: '시드니' },
    Dubai: { utcOffset: 4, name: '두바이' },
    Singapore: { utcOffset: 8, name: '싱가포르' }
};

const citySelect = document.getElementById('city-select');
const cityName = document.getElementById('city-name');
const currentTime = document.getElementById('current-time');

function updateTime() {
    const selectedCity = citySelect.value;
    const city = cities[selectedCity];
    
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const cityTime = new Date(utcTime + (3600000 * city.utcOffset));
    
    const hours = String(cityTime.getHours()).padStart(2, '0');
    const minutes = String(cityTime.getMinutes()).padStart(2, '0');
    const seconds = String(cityTime.getSeconds()).padStart(2, '0');
    
    cityName.textContent = city.name;
    currentTime.textContent = `${hours}:${minutes}:${seconds}`;
}

citySelect.addEventListener('change', updateTime);

// 초기 실행
updateTime();

// 1초마다 업데이트
setInterval(updateTime, 1000);
