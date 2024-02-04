export async function getLocation(ip) {
  const response = await fetch(`http://ipwho.is/${ip}`,  {mode: 'nocors'});

  return await response.json();
}