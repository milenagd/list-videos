export const makeRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const responseJson = await response.json();
    return responseJson;
  } catch (err) {
    console.error(`Request to ${url} failed`, err);
  }
};
