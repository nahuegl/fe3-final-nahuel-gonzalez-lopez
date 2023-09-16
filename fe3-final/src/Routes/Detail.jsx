import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';

const Detail = () => {
  const { apiState } = useGlobalContext();
  const params = useParams();
  const dentistId = parseInt(params.id, 10); // Convierte el parámetro de la URL a un número entero

  // Buscar el dentista específico por su ID en el apiState
  const dentist = apiState.find((d) => d.id === dentistId);

  // Comprobar si se encontró al dentista
  if (!dentist) {
    return <div className="detail">Dentista no encontrado.</div>;
  }

  return (
    <div className={`detail ${apiState.length % 2 === 0 ? 'even' : 'odd'}`}>
      <h1>Detalles de {dentist.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
