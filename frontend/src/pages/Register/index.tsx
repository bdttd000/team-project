import React, { useState } from "react";
import LayoutAuth from "../../layouts/LayoutAuth";
import { Input, Submit } from "../../components/Form";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register: React.FC = () => {
  const [registerData, registerDataData] = useState({
    login: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    registerDataData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();  //
    console.log("Dane logowania:", registerData);
   try {
    const response = await axios.post('http://localhost:8000/token/', registerDataData);
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    navigate('/home');
  } catch (error) {
    console.error('Błąd logowania:', error);
  }
  };

  let navigate = useNavigate();

  return (
    <LayoutAuth>
      <div className="lg:w-1/2 flex flex-col justify-center content-center flex-wrap gap-6">
        <img className="w-60 lg:w-96" src={Logo} alt="Logo"></img>
        {/* <div className='text-center text-black font-bold text-5xl'>Zaloguj się</div> */}
        <div
          className="hidden lg:block outline-none bg-blue-500 p-2 rounded-lg text-white cursor-pointer text-center text-xl"
          onClick={() => {
            navigate("/login");
          }}
        >
          Zaloguj się
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center content-center flex-wrap">
        <form className="flex flex-col w-11/12 lg:w-3/5 gap-3 bg-white p-10">
          <span className="text-center text-3xl m-3">Zarejestruj się</span>
          <hr className="m-3" />
          <Input
            type="text"
            name="login"
            placeholder="Podaj swój login"
            value={registerData.login}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Podaj swój email"
            value={registerData.email}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password1"
            placeholder="Podaj swoje hasło"
            value={registerData.password1}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password2"
            placeholder="Podaj ponownie swoje hasło"
            value={registerData.password2}
            onChange={handleInputChange}
          />
          <Submit text="Zarejestruj" onClick={handleSubmit} />
          <hr className="m-3" />
          <span className="text-center">
            Masz już konto?{" "}
            <Link className="text-blue-500" to="/login">
              Zaloguj się
            </Link>
          </span>
        </form>
      </div>
    </LayoutAuth>
  );
};

export default Register;
