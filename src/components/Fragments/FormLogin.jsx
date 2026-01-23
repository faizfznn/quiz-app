import { useState, useEffect } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Inputs";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
      (storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password) ||
      (formData.email === "test@test.com" && formData.password === "1234")
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Email atau Password salah!");
    }
  };

  const isFormValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-5">
      {/* --- BOX INFORMASI AKUN DUMMY (Baru) --- */}
      <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded relative mb-2 text-sm">
        <strong className="font-bold block mb-1">Coba Akun Demo:</strong>
        <div className="flex flex-col gap-1">
          <span className="block sm:inline">
            <span className="font-semibold">Email:</span> test@test.com
          </span>
          <span className="block sm:inline">
            <span className="font-semibold">Pass:</span> 1234
          </span>
        </div>
      </div>
      {/* --------------------------------------- */}

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