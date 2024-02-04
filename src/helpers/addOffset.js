export function addOffset(map) {
  const offsetY = map.container.getSize()[1] * 0.2;
  const currentCenter = map.getCenter();

  const [x, ] = currentCenter;
  map.panTo(currentCenter, [x, -offsetY]);
}