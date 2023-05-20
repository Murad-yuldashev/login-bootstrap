import React, { useState } from "react";
import icon from "../assets/logo.png";
import { Input } from "../UI";

const Registrasiya = () => {
  const [infoInput, setInfoInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = infoInput;

  const infoData = (e) => {
    setInfoInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(infoInput);
  return (
    <section className="text-center mt-5">
      <div className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={icon} alt="" width="78" height="78" />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <Input
            infoData={infoData}
            name="name"
            valName={name}
            label={"User Name"}
          />
          <Input
            infoData={infoData}
            name="email"
            valName={email}
            type="email"
            label={"Email address"}
          />
          <Input
            infoData={infoData}
            name="password"
            valName={password}
            type="password"
            label={"Password"}
          />

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registrasiya;
