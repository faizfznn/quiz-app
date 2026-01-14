import { useState, useEffect } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Inputs";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail || savedPassword) {
      setFormData({
        email: savedEmail || "",
        password: savedPassword || "",
      });
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/home";
    } else {
      alert("Email atau Password salah!");
    }
  };

  const isFormValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-5">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
        value={formData.email} 
        onChange={handleInputChange} 
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
        value={formData.password} 
        onChange={handleInputChange} 
      />
      <Button
        className="box-border w-full"
        type="submit"
        disabled={!isFormValid}
      >
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
