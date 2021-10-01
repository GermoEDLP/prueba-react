import React, { useEffect, useState } from "react";
import { agregarElemento, obtenerDatos } from "../helpers/dbFunctions";

const ConexionDB = () => {
  const initialState = [];

  const [users, setUsers] = useState(initialState);
  const [msg, setMsg] = useState(initialState)
  const [loading, setLoading] = useState(true);


  const addElement = () => {
      agregarElemento("msgs", {
          desc: "Mensaje enviado desde firebase",
          fecha: new Date(),
          titulo: "Mensaje",
          visto: false
      })
  }

  useEffect(() => {
    obtenerDatos("users", setUsers, setLoading);
    obtenerDatos("msgs", setMsg, setLoading);
  }, []);

  return (
    <div>
      <h1>ConexionDB</h1>
        <button onClick={addElement}>Agregar</button>
      {/* <ul>
        {loading ? (
          <li>Cargando...</li>
        ) : (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        )}
      </ul> */}
      <ul>
        {loading ? (
          <li>Cargando...</li>
        ) : (
          msg.map((m) => <li key={m.id}>{m.desc}</li>)
        )}
      </ul>
    </div>
  );
};

export default ConexionDB;
