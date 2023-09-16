import React from 'react';
import Card from '../Components/Card';
import { useGlobalContext } from '../Components/utils/global.context';

import '../Styles/favsStyles.css';

const Favs = () => {
  const { setArr } = useGlobalContext();
  const favourites = JSON.parse(localStorage.getItem('arr')) || [];

  const clearFav = () => {
    localStorage.setItem('arr', JSON.stringify([]));
    setArr([]);
  };

  return (
    <div className='fav vista'>
      <button className='clear-fav-button' onClick={clearFav}>
        🗑️ Limpiar Favoritos
      </button>
      <h1>Dentistas Favoritos</h1>
      <div className='card-grid'>
        {favourites.map((favourite) => (
          <Card
            key={favourite.id}
            name={favourite.name}
            username={favourite.username}
            id={favourite.id}
            showButton={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
