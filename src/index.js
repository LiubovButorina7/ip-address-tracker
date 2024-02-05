import { addOffset, createPlacemark, getLocation, getUserIp, validateIp } from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');
const ipInfo = document.getElementById('ip');
const locationInfo = document.getElementById('location');
const timezoneInfo = document.getElementById('timezone');
const ispInfo = document.getElementById('isp');

ipInput.addEventListener('keydown', handleEnter);
btn.addEventListener('click', getIpLocation);

let map;

function getIpLocation() {
  const ip = ipInput.value;
    
  if (validateIp(ip)) {
    getLocation(ip)
      .then(renderIpInfo);
  }  
}

function handleEnter(event) {
  if (event.key === 'Enter') {
    getIpLocation();
  }
}

ymaps.ready(initMap);

function initMap()
{
  getUserIp()
    .then(ipInfo => {
      const initCoordinates = [ipInfo.latitude, ipInfo.longitude]; 

      map = new ymaps.Map(document.querySelector('.map'), {
        center: initCoordinates,
        zoom: 14, 
        controls: ['zoomControl'], 
        suppressMapOpenBlock: true,
      });
            
      getLocation(ipInfo.ip)
        .then(location => renderIpInfo(location, true));
        
      map.copyrights.add(`Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/LiubovButorina7/ip-address-tracker" target="_blank>Liubov Butorina.</a>`);
    });    
}   

function renderIpInfo(ipLocation, init = false) {
  const { ip, latitude, longitude, city, region_code, country_code, postal, connection: { isp }, timezone: { utc }} = ipLocation;
   
  ipInfo.innerText = ip;
  locationInfo.innerText = `${city}, ${region_code}, ${country_code} ${postal}`;
  timezoneInfo.innerText = utc;
  ispInfo.innerText = isp;

  ipInput.value = '';

  if (!init) 
  {
    map.setCenter([latitude, longitude]);
    map.geoObjects.removeAll();   
  }
  const placemark = createPlacemark([latitude, longitude], init);

  map.geoObjects.add(placemark);

  if (matchMedia("(max-width: 1023px)").matches) {
    addOffset(map);
  }
}