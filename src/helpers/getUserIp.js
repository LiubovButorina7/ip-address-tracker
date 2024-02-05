export async function getUserIp() {
  //const response = await fetch('http://ipwho.is/');
  const response = await fetch('https://ipwho.is/');

  return await response.json();
}