import React from "react";

export const Alerts = ({msg, type}) => {

    const alertClass = "alert alert-"+type;

    console.log(alertClass);

  return (
    <div className={alertClass} role="alert">
      {msg}
    </div>
  );
};
