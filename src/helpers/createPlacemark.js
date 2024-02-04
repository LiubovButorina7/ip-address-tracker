export function createPlacemark(coordinates, init) {
  const placemark = new ymaps.Placemark(coordinates,{
    hintContent: init ? 'You\'re here!' : ''
  });
     
  return placemark;    
}
