import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

// Definimos un contexto global
export const ContextGlobal = createContext(undefined);

// Definimos los temas
const themes = {
  dark: {
    t: false,
  },
  light: {
    t: true,
  },
};

// Estado inicial para el tema
const initialState = themes.light;
const initialStateApi = [];

// Reducer para el tema
function themeReducer(state, action) {
  switch (action.type) {
    case 'SWITCH_DARK':
      return themes.dark;
    case 'SWITCH_LIGHT':
      return themes.light;
    default:
      throw new Error('Acción no reconocida');
  }
}

// Reducer para la API
function apiReducer(state, action) {
  switch (action.type) {
    case 'GET_API':
      return action.payload;
    default:
      throw new Error('Acción no reconocida');
  }
}

// Componente ContextProvider
export const ContextProvider = ({ children }) => {
  // Reducer para el tema
  const [themeState, dispatchTheme] = useReducer(themeReducer, initialState);

  // Reducer para la API
  const [apiState, dispatchApi] = useReducer(apiReducer, initialStateApi);

  // Lógica para guardar y recuperar datos del local storage
  const [arr, setArr] = useState([]);
  const localStorageData = localStorage.getItem("arr");
  const initialArr = localStorageData ? JSON.parse(localStorageData) : [];

  useEffect(() => {
    setArr(initialArr);
  }, [initialArr]);

  // URL para la solicitud de API
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Obtener datos de la API al cargar el componente
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => dispatchApi({ type: 'GET_API', payload: data }))
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <ContextGlobal.Provider
      value={{ apiState, arr, setArr, themeState, dispatchTheme }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

// Hook personalizado para acceder al contexto
export const useGlobalContext = () => useContext(ContextGlobal);
