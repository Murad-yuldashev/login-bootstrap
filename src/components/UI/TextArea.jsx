import React from "react";

const TextArea = ({label, infoData, valName, name, height = '100px'}) => {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder={label}
        onChange={infoData}
        value={valName}
        name={name}
        id="floatingTextarea2"
        style={{height: height}}
      ></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
};

export default TextArea;
