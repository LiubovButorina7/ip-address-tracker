export async function getUserIp() {
  const response = await fetch('http://ipwho.is/',
  {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'https://github.com/LiubovButorina7/ip-address-tracker',
    }
  });
  
  return await response.json();
}