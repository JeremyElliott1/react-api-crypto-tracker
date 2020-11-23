import axios from 'axios';

export const getCoinData = () => {
  return axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=50&page=1&sparkline=false');
};

export default getCoinData;