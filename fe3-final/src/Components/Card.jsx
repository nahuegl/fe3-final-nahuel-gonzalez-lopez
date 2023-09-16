import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ name, username, id, showButton }) => {
  const { setArr } = useGlobalContext();
  const [selectedDentist, setSelectedDentist] = useState(null);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSelectedDentist(data))
      .catch((error) => {
        console.error(`Error al obtener datos del dentista con ID ${id}:`, error);
      });
  }, [url, id]);

  const addFav = () => {
    if (!selectedDentist) return;

    const array = JSON.parse(localStorage.getItem("arr")) || [];
    const existsDentist = array.find((elemento) => elemento.id === selectedDentist.id);

    if (existsDentist) {
      console.log('No se puede agregar el dentista, ya existe en favoritos.');
    } else {
      console.log('Se agregó el dentista a favoritos.');
      array.push(selectedDentist);
      localStorage.setItem("arr", JSON.stringify(array));
      setArr(array);
    }
  };

  const removeCard = () => {
    if (!selectedDentist) return;

    const array = JSON.parse(localStorage.getItem("arr")) || [];
    const index = array.findIndex((elemento) => elemento.id === selectedDentist.id);

    if (index > -1) {
      console.log('Se eliminó el dentista de favoritos.');
      array.splice(index, 1);
      localStorage.setItem("arr", JSON.stringify(array));
      setArr(array);
    }
  };

  return (
    <div className="card">
      <Link key={id} to={`/dentist/${id}`}>
        <div>
          <img className="card-img" src="/images/doctor.jpg" alt="Doctor" width={200} />
          <h4>{name}</h4>
          <h3>{username}</h3>
        </div>
      </Link>
      {showButton ? (
        <button onClick={addFav} className="favButton">
          Añadir a favoritos
        </button>
      ) : (
        <button onClick={removeCard} className="favButton">
          Eliminar de favoritos
        </button>
      )}
    </div>
  );
};

export default Card;
