export async function getUserIp() {
  const response = await fetch('http://ipwho.is/', {mode: 'cors'});
  /*
  {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin:': 'http://ipwho.is/',
    }
  });
  */
  return await response.json();
}