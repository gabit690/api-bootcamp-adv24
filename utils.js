const axios = require('axios');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const createResponse = (status, code, data, message) => {
  return { status, code, data, message };
};


const fetchDataFromExternalAPI = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data; // Supongamos que la API devuelve datos en formato JSON
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw new Error('Error fetching data from API');
  }
};

module.exports = {
  getRandomNumber,
  createResponse,
  fetchDataFromExternalAPI
};
