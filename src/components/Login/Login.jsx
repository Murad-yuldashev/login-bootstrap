import React, { useState } from "react";
import icon from "../assets/logo.png";
import { Input } from "../UI";
import { useDispatch, useSelector } from "react-redux";
import { siginUserFailure, siginUserLoading, siginUserSuccsess } from "../../redux/Auth";
import AuthService from "../../service/auth";

const Login = () => {

  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.auth);
  console.log(isLoading, 'dddd');
  const [infoInput, setInfoInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password } = infoInput;

  const infoData = (e) => {
    setInfoInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const loginhandleClick = async (e) => {
    e.preventDefault();
    dispatch(siginUserLoading());
    const user = {email, password};
    try {
      const response = await AuthService.userLogin(user);
      dispatch(siginUserSuccsess(response.user));
    } catch(error) {
      dispatch(siginUserFailure(error.response.data.errors));
    }
  }

  return (
    <section className="text-center mt-5">
      <div className="form-signin w-25 m-auto">
        <form>
          <img className="mb-4" src={icon} alt="" width="78" height="78" />
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>

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

          <button onClick={loginhandleClick} disabled={isLoading} className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
