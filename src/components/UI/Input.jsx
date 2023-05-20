import React from "react";

const Input = ({label, infoData, valName, name, type = 'text'}) => {
  return (
    <div className="form-floating mt-1">
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder={label}
        onChange={infoData}
        value={valName}
        name={name}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
