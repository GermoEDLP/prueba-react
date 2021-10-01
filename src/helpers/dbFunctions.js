import { db } from "../firebase";

export const obtenerDatos = (coleccion, setDatos, setLoading) => {
  db.collection(coleccion).onSnapshot((q) => {
    const dataTemp = [];
    setLoading(true);
    q.docs.forEach((doc) => {
      dataTemp.push({ ...doc.data(), id: doc.id });
    });
    setDatos(dataTemp);
    setLoading(false);
  });
};

export const agregarElemento = (coleccion, elemento) => {
  return db.collection(coleccion).add(elemento);
};
