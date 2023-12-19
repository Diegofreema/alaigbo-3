// /**
//  * @param {RequestInfo} url
//  * @param {RequestInit} options
//  * @returns {Promise<Response>}
//  */
// const fetchWithRetry = async (url, options) => {
//   const MAX_RETRIES = 4;
//   let error = Error('something went wrong');
//   for (let i = 0; i < MAX_RETRIES; i++) {
//     try {
//       return await fetch(url, options);
//     } catch (err) {
//       error = err;
//     }
//   }
//   console.error('Fetch failed after max retries', { url, options });
//   throw error;
// };

export default async function getToken(role) {
  try {
    const response = await fetch(
      'https://prod-in2.100ms.live/hmsapi/diego-livestream-1000.app.100ms.live/api/token',
      {
        method: 'POST',
        body: JSON.stringify({
          role: role,
          room_id: '65815c083412d193e842022f',
          user_id:
            Math.random().toString(36) + new Date().getTime().toString(36),
        }),
      }
    );

    if (!response.ok) {
      let error = new Error('Request failed!');
      error.response = response;
      throw error;
    }

    const data = await response.json();
    const { token } = data;
    console.log(token);

    if (token === null) {
      throw Error(data.msg);
    }
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
