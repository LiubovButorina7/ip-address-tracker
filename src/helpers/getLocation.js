export async function getLocation(ip) {
  const response = await fetch(`http://ipwho.is/${ip}`);

  return await response.json();
}