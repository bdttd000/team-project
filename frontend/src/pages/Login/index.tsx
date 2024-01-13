import React, { useState } from "react";
import LayoutAuth from "../../layouts/LayoutAuth";
import { Input, Submit } from "../../components/form";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Dane logowania:", loginData);
  };

  let navigate = useNavigate();

  return (
    <LayoutAuth>
      <div className="lg:w-1/2 flex flex-col justify-center content-center flex-wrap gap-6">
        <img className="w-60 lg:w-96" src={Logo} alt="Logo"></img>
        {/* <div className='text-center text-black font-bold text-5xl'>Zarejestruj się</div> */}
        <div
          className="hidden lg:block outline-none bg-blue-500 p-2 rounded-lg text-white cursor-pointer text-center text-xl"
          onClick={() => {
            navigate("/register");
          }}
        >
          Zarejestruj się
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center content-center flex-wrap">
        <form className="flex flex-col w-11/12 lg:w-3/5 gap-3 bg-white p-10">
          <span className="text-center text-3xl m-3">Zaloguj się</span>
          <hr className="m-3" />
          <Input
            type="email"
            name="email"
            placeholder="Podaj swój email"
            value={loginData.email}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Podaj swoje hasło"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <Submit text="Zaloguj" onClick={handleSubmit} />
          <hr className="m-3" />
          <span className="text-center">
            Nie masz konta?{" "}
            <Link className="text-blue-500" to="/register">
              Zarejestruj się
            </Link>
          </span>
        </form>
      </div>
    </LayoutAuth>
  );
};

export default Login;
