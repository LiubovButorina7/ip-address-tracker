export async function getUserIp() {
  const response = await fetch('http://ipwho.is/');
  
  return await response.json();
}