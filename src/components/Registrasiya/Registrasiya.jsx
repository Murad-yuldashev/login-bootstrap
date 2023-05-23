import React, { useEffect, useState } from "react";
import icon from "../assets/logo.png";
import { Input } from "../UI";
import { siginUserFailure, siginUserLoading, siginUserSuccsess, } from "../../redux/Auth";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../service/auth";
import {ValidationError} from "../index";
import { useNavigate } from "react-router-dom";

const Registrasiya = () => {

  const navigate = useNavigate()

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

  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);

  const registerhandleClick = async (e) => {
    e.preventDefault();
    dispatch(siginUserLoading());
    const user = {username: name, email, password};
    try {
      const response = await AuthService.userRegister(user);
      dispatch(siginUserSuccsess(response.user));
      navigate('/')
    } catch(error) {
      dispatch(siginUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if(loggedIn) {
      navigate('/')
    }
  }, [])

  return (
    <section className="text-center mt-5">
      <div className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={icon} alt="" width="78" height="78" />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <ValidationError />

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

          <button
            onClick={registerhandleClick}
            disabled={isLoading}
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registrasiya;
