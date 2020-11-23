import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Coin from './Coin';
import getCoinData from './api/coinGecko';



/**
 * Main app function,
 * fetches data from coingecko API
 * renders everything
 */
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getCoinData()
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error))
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coint-text">Search A Currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}>
          </input>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>
  );
}

export default App;
