export async function getLocation(ip) {
  const response = await fetch(`http://ipwho.is/${ip}`,  {mode: 'cors'});

  return await response.json();
}