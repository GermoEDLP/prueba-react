import React, { useState } from "react";
import './loading.css'

export const Loading = () => {
  const [state, setstate] = useState(true);

  setTimeout(() => {
      setstate(false)
  }, 2000)

  return <div>{state ? <h1 className="rojo">Loading...</h1> : <h1>Cargado</h1>}</div>;
};
