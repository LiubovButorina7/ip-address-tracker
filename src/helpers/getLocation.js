export async function getLocation(ip) {
  const response = await fetch(`https://ipwho.is/${ip}`);

  return await response.json();
}